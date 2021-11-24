import { ProductDetailsProps, ProductProps } from 'components';

export type ImageByQuery = {
  url: string;
};

export type ProductByQuery = Omit<ProductProps, 'image'> & {
  images: ImageByQuery[];
};

export type ProductDetailsByQuery = Omit<ProductDetailsProps, 'images'> & {
  images: ImageByQuery[];
};

export type WithChildren = {
  children: React.ReactNode;
};
