import { gql } from 'graphql-request';
import { ProductFragment } from 'graphql/fragments/product';

export const QUERY_PRODUCT_BY_ID = gql`
  query QueryProductById($id: String) {
    products(where: { id: $id }) {
      ...Product
      category
      type
    }
  }

  ${ProductFragment}
`;
