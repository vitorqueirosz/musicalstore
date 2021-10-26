import { gql } from 'graphql-request';
import { ProductFragment } from 'graphql/fragments/product';

export const QUERY_HOME = gql`
  query Home {
    home {
      releases {
        id
        title
        products {
          ...ProductFragment
        }
      }
      highlights {
        id
        title
        products {
          ...ProductFragment
        }
      }
    }
  }

  ${ProductFragment}
`;
