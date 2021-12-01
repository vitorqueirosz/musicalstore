/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Home
// ====================================================

export interface Home_home_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface Home_home_banners {
  __typename: "ComponentBannersBanners";
  buttonLabel: string | null;
  buttonLink: string | null;
  image: Home_home_banners_image | null;
}

export interface Home_home_releases_products_images {
  __typename: "UploadFile";
  url: string;
}

export interface Home_home_releases_products {
  __typename: "Products";
  id: string;
  name: string;
  price: string;
  images: Home_home_releases_products_images[];
}

export interface Home_home_releases {
  __typename: "ComponentSectionReleases";
  id: string;
  title: string;
  products: Home_home_releases_products[];
}

export interface Home_home_highlights_products_images {
  __typename: "UploadFile";
  url: string;
}

export interface Home_home_highlights_products {
  __typename: "Products";
  id: string;
  name: string;
  price: string;
  images: Home_home_highlights_products_images[];
}

export interface Home_home_highlights {
  __typename: "ComponentSectionHighlights";
  id: string;
  title: string;
  products: Home_home_highlights_products[];
}

export interface Home_home {
  __typename: "Home";
  banners: (Home_home_banners | null)[] | null;
  releases: Home_home_releases | null;
  highlights: Home_home_highlights | null;
}

export interface Home {
  home: Home_home | null;
}
