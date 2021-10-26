import { QUERY_HOME } from 'graphql/queries/home';
import { HomePayload } from 'hooks';
import { initializeClient } from './apollo';

export const getHomeProducts = async () => {
  const graphQLClient = initializeClient();

  return await graphQLClient.request<HomePayload>(QUERY_HOME);
};
