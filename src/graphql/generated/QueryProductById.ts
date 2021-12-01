/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PRODUCTS_CATEGORY, ENUM_PRODUCTS_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryProductById
// ====================================================

export interface QueryProductById_products_images {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProductById_products {
  __typename: "Products";
  id: string;
  name: string;
  price: string;
  images: QueryProductById_products_images[];
  category: ENUM_PRODUCTS_CATEGORY | null;
  type: ENUM_PRODUCTS_TYPE | null;
}

export interface QueryProductById {
  products: QueryProductById_products[];
}

export interface QueryProductByIdVariables {
  where?: any | null;
}
