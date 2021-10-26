import { gql } from 'graphql-request';

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
