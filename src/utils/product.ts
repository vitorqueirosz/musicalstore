import { QUERY_PRODUCT_BY_ID } from 'graphql/queries/product';
import { ProductDetailsByQuery } from 'types/common';
import { initializeClient } from './apollo';

export type ProductQueryPayload = {
  products: ProductDetailsByQuery[];
};

export const getProductById = async (id: string) => {
  const graphQLClient = initializeClient();

  return await graphQLClient.request(QUERY_PRODUCT_BY_ID, {
    where: {
      id,
    },
  });
};
