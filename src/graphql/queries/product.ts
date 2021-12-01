import { gql } from '@apollo/client';
import { ProductFragment } from 'graphql/fragments/product';

export const QUERY_PRODUCT_BY_ID = gql`
  query QueryProductById($where: JSON) {
    products(where: $where) {
      ...ProductFragment
      category
      type
    }
  }

  ${ProductFragment}
`;
