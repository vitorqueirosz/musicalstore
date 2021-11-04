import { ProductProps } from 'components';
import { QUERY_PRODUCTS } from 'graphql/queries/search';
import { ParsedUrlQuery } from 'querystring';
import { initializeClient } from './apollo';

export type SearchQueryPayload = {
  products: ProductProps[];
};

export const getSearchProducts = (query: ParsedUrlQuery) => {
  const graphQLClient = initializeClient();

  const variables = {
    where: {
      ...query,
    },
    limit: 12,
  };

  return graphQLClient.request<SearchQueryPayload>(QUERY_PRODUCTS, variables);
};
