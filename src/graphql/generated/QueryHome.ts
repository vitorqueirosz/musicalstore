/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_home_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_home_banners {
  __typename: "ComponentBannersBanners";
  buttonLabel: string | null;
  buttonLink: string | null;
  image: QueryHome_home_banners_image | null;
}

export interface QueryHome_home_releases_products_images {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_home_releases_products {
  __typename: "Products";
  id: string;
  name: string;
  price: string;
  images: QueryHome_home_releases_products_images[];
}

export interface QueryHome_home_releases {
  __typename: "ComponentSectionReleases";
  id: string;
  title: string;
  products: QueryHome_home_releases_products[];
}

export interface QueryHome_home_highlights_products_images {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_home_highlights_products {
  __typename: "Products";
  id: string;
  name: string;
  price: string;
  images: QueryHome_home_highlights_products_images[];
}

export interface QueryHome_home_highlights {
  __typename: "ComponentSectionHighlights";
  id: string;
  title: string;
  products: QueryHome_home_highlights_products[];
}

export interface QueryHome_home {
  __typename: "Home";
  banners: (QueryHome_home_banners | null)[] | null;
  releases: QueryHome_home_releases | null;
  highlights: QueryHome_home_highlights | null;
}

export interface QueryHome {
  home: QueryHome_home | null;
}
