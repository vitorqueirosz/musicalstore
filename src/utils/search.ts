import {
  QueryProducts,
  QueryProductsVariables,
} from 'graphql/generated/QueryProducts';
import { QUERY_PRODUCTS } from 'graphql/queries/search';
import { ParsedUrlQuery } from 'querystring';
import { ProductByQuery } from 'types/common';
import { initializeApollo } from './apollo';

export type SearchQueryPayload = {
  products: ProductByQuery[];
};

type QueryWidhId = { id: string[] };

export type QueryProps = ParsedUrlQuery | QueryWidhId;

const apolloClient = initializeApollo();

export const getSearchProducts = async (query?: QueryProps) => {
  return await apolloClient.query<QueryProducts, QueryProductsVariables>({
    query: QUERY_PRODUCTS,
    variables: {
      where: {
        ...query,
      },
      limit: 12,
      skip: false,
    },
  });
};
