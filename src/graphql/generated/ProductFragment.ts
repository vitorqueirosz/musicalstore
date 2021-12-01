/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductFragment
// ====================================================

export interface ProductFragment_images {
  __typename: "UploadFile";
  url: string;
}

export interface ProductFragment {
  __typename: "Products";
  id: string;
  name: string;
  price: string;
  images: ProductFragment_images[];
}
