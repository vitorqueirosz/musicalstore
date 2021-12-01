import { gql } from '@apollo/client';

export const ProductFragment = gql`
  fragment ProductFragment on Products {
    id
    name
    price
    images {
      url
    }
  }
`;
