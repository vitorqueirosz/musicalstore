import { BannerProps, ProductsSectionProps } from 'components';
import { ImageByQuery, ProductByQuery } from 'types/common';
import { QUERY_HOME } from 'graphql/queries/home';
import { initializeClient } from './apollo';

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
  const graphQLClient = initializeClient();

  return await graphQLClient.request<HomeQueryPayload>(QUERY_HOME);
};
