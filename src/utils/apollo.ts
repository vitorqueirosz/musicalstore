import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { isSSR } from 'constants/config';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

export const createGraphQLClient = () => {
  return new ApolloClient({
    ssrMode: isSSR,
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      headers: {},
    }),
    cache: new InMemoryCache({}),
  });
};

export const initializeApollo = (initialState = null) => {
  const clientGlobal = apolloClient ?? createGraphQLClient();

  if (initialState) clientGlobal.cache.restore(initialState);

  if (!isSSR) return clientGlobal;

  apolloClient = clientGlobal;

  return apolloClient;
};

export const useApollo = (initialState = null) => {
  return useMemo(() => initializeApollo(initialState), [initialState]);
};
