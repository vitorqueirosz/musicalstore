import { HomeProps } from 'templates';
import { ProductsByQuery } from 'types/common';
import { BannersByQuery, HomeQueryPayload } from 'utils/home';
import { setDefaultUrlToImg } from 'utils/setDefaultUrlToImg';

const bannersWithDefaultImgUrl = (banners: BannersByQuery[] | undefined) => {
  return banners?.length
    ? banners.map((banner) => ({
        ...banner,
        image: setDefaultUrlToImg(banner.image.url),
      }))
    : [];
};

export const productsWithDefaultImgUrl = (
  products: ProductsByQuery[] | undefined,
) => {
  return products?.length
    ? products.map((product) => ({
        ...product,
        image: setDefaultUrlToImg(product.images[0].url),
      }))
    : [];
};

export const homeMapper = (homeProps: HomeQueryPayload | undefined) => {
  const homePayload: HomeProps = {
    banners: bannersWithDefaultImgUrl(homeProps?.home.banners),
    releases: {
      title: homeProps?.home.releases.title ?? '',
      products: productsWithDefaultImgUrl(homeProps?.home.releases.products),
    },
    highlights: {
      title: homeProps?.home.highlights.title ?? '',
      products: productsWithDefaultImgUrl(homeProps?.home.highlights.products),
    },
  };

  return homePayload;
};
