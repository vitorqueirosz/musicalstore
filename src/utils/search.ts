import { QUERY_PRODUCTS } from 'graphql/queries/search';
import { ParsedUrlQuery } from 'querystring';
import { ProductsByQuery } from 'types/common';
import { initializeClient } from './apollo';

export type SearchQueryPayload = {
  products: ProductsByQuery[];
};

export const getSearchProducts = async (query: ParsedUrlQuery) => {
  const graphQLClient = initializeClient();

  const variables = {
    where: {
      ...query,
    },
    limit: 12,
  };

  return await graphQLClient.request<SearchQueryPayload>(
    QUERY_PRODUCTS,
    variables,
  );
};
