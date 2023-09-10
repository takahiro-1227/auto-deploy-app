import { App, SecretValue, Stack, StackProps } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as rds from "aws-cdk-lib/aws-rds";
import * as ssm from "aws-cdk-lib/aws-ssm";

export class AutoDeployAppStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'Vpc', {
      maxAzs: 2,
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      natGateways: 0,
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        }
      ],
    });

    const databaseUserName = ssm.StringParameter.fromStringParameterAttributes(this, 'DatabaseUserName', {
      parameterName: '/auto-deploy-app/MYSQL_USER',
    }).stringValue;

    const databasePassword = SecretValue.ssmSecure('/auto-deploy-app/MYSQL_PASSWORD');

    const dbSecurityGroup = new ec2.SecurityGroup(this, 'dbSecurityGroup', {
      vpc,
      allowAllOutbound: true,
    });

    dbSecurityGroup.addIngressRule(ec2.Peer.ipv4(vpc.vpcCidrBlock), ec2.Port.tcp(3306), 'allow access from vpc');
    
    const db = new rds.DatabaseInstance(this, 'autoDeployAppDatabase', {
      engine: rds.DatabaseInstanceEngine.mysql({
        version: rds.MysqlEngineVersion.VER_8_0_32,
      }),
      credentials: {
        username: databaseUserName,
        password: databasePassword,
      },
      securityGroups: [dbSecurityGroup],
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      databaseName: 'auto_deploy_app',
      vpc,
    });
  }
}