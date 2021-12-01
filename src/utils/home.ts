import { BannerProps, ProductsSectionProps } from 'components';
import { ImageByQuery, ProductByQuery } from 'types/common';
import { QUERY_HOME } from 'graphql/queries/home';
import { initializeApollo } from './apollo';
import { QueryHome } from 'graphql/generated/QueryHome';

export type BannersByQuery = Omit<BannerProps, 'image'> & {
  image: ImageByQuery;
};

type ProductsSectionByQuery = Omit<ProductsSectionProps, 'products'> & {
  products: ProductByQuery[];
};

export type HomeQueryPayload = {
  home: {
    banners: BannersByQuery[];
    releases: ProductsSectionByQuery;
    highlights: ProductsSectionByQuery;
  };
};

export const getHomeProducts = async () => {
  const apolloClient = initializeApollo();

  return await apolloClient.query<QueryHome>({
    query: QUERY_HOME,
  });
};
