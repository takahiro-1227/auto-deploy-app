import { App } from 'aws-cdk-lib';
import { AutoDeployAppStack } from './autoDeployAppStack';
const app = new App();

new AutoDeployAppStack(app, 'autoDeployApp');