import { GraphQLClient } from 'graphql-request';

let graphQLClient: GraphQLClient;

export const createGraphQLClient = () => {
  return new GraphQLClient(`${process.env.NEXT_PUBLIC_API_URL}/graphql`);
};

export const initializeClient = () => {
  const clientGlobal = graphQLClient ?? createGraphQLClient();

  if (!graphQLClient) graphQLClient = clientGlobal;

  return clientGlobal;
};
