import { gql } from '@apollo/client';
import { ProductFragment } from 'graphql/fragments/product';

export const QUERY_PRODUCTS = gql`
  query QueryProducts($limit: Int, $where: JSON) {
    products(limit: $limit, where: $where) {
      ...ProductFragment
    }
  }

  ${ProductFragment}
`;
