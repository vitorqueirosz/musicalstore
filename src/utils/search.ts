import { QUERY_PRODUCTS } from 'graphql/queries/search';
import { ParsedUrlQuery } from 'querystring';
import { ProductByQuery } from 'types/common';
import { initializeClient } from './apollo';

export type SearchQueryPayload = {
  products: ProductByQuery[];
};

type QueryWidhId = { id: string[] };

export type QueryProps = ParsedUrlQuery | QueryWidhId;

const graphQLClient = initializeClient();

export const getSearchProducts = async (query?: QueryProps, skip?: boolean) => {
  const variables = {
    ...(query && {
      where: {
        ...query,
      },
    }),
    limit: 12,
    skip: !!skip,
  };

  return await graphQLClient.request<SearchQueryPayload>(
    QUERY_PRODUCTS,
    variables,
  );
};
