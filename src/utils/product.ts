import {
  QueryProductById,
  QueryProductByIdVariables,
} from 'graphql/generated/QueryProductById';
import { QUERY_PRODUCT_BY_ID } from 'graphql/queries/product';
import { ProductDetailsByQuery } from 'types/common';
import { initializeApollo } from './apollo';

export type ProductQueryPayload = {
  products: ProductDetailsByQuery[];
};

export const getProductById = async (id: string) => {
  const apolloClient = initializeApollo();

  return await apolloClient.query<QueryProductById, QueryProductByIdVariables>({
    query: QUERY_PRODUCT_BY_ID,
    variables: {
      where: {
        id,
      },
    },
  });
};
