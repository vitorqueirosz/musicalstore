import { BannerProps } from 'components';
import { ImageByQuery } from 'types/common';
import { QUERY_HOME } from 'graphql/queries/home';
import { initializeClient } from './apollo';
import { HomeProps } from 'templates';

type BannersByQuery = Omit<BannerProps, 'image'> & {
  image: ImageByQuery;
};

export type HomeQueryPayload = {
  home: Omit<HomeProps, 'banners'> & {
    banners: BannersByQuery[];
  };
};

export const getHomeProducts = async () => {
  const graphQLClient = initializeClient();

  return await graphQLClient.request<HomeQueryPayload>(QUERY_HOME);
};
