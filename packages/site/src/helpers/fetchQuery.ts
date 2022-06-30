import { DocumentNode, OperationVariables } from '@apollo/client';
import { print } from 'graphql';
import { client } from '../config/client';

interface Props<QueryVariables extends OperationVariables> {
  query: DocumentNode;
  variables?: QueryVariables;
}

export const fetchQuery = async <Query, QueryVariables extends OperationVariables = {}>({
  query,
  variables,
}: Props<QueryVariables>) => {
  const { data, errors } = await client.query<Query, QueryVariables>({
    query,
    variables,
  });

  if (errors) {
    if (errors[0].extensions) {
      errors[0].extensions.query = print(query);
      errors[0].extensions.variables = variables;
    }
    console.error(errors[0]);
    throw errors[0];
  }

  return data;
};
