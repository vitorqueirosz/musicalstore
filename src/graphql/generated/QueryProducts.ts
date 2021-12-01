/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProducts
// ====================================================

export interface QueryProducts_products_images {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProducts_products {
  __typename: "Products";
  id: string;
  name: string;
  price: string;
  images: QueryProducts_products_images[];
}

export interface QueryProducts {
  products: QueryProducts_products[];
}

export interface QueryProductsVariables {
  limit?: number | null;
  where?: any | null;
  skip: boolean;
}
