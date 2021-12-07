import { ProductDetailsProps, ProductProps } from 'components';
import { HomeProps } from 'templates';
import { ProductByQuery, ProductDetailsByQuery } from 'types/common';
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
  products: ProductByQuery[] | undefined,
): ProductProps[] => {
  return products?.length
    ? products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
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

export const productDetailsMapper = (product: ProductDetailsByQuery) => {
  const productPayload: ProductDetailsProps = {
    id: product.id,
    name: product.name,
    images: product.images.map((image) => setDefaultUrlToImg(image.url)),
    price: product.price,
    brand: product.brand,
    description: product.description,
    category: product.category,
    type: product.type,
  };

  return productPayload;
};
