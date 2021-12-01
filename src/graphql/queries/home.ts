import { gql } from '@apollo/client';
import { ProductFragment } from 'graphql/fragments/product';

export const QUERY_HOME = gql`
  query QueryHome {
    home {
      banners {
        buttonLabel
        buttonLink
        image {
          url
        }
      }
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
