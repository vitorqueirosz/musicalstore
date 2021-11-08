import { ProductProps } from 'components';
import { ProductDetailsProps } from 'templates';

export type ImageByQuery = {
  url: string;
};

export type ProductByQuery = Omit<ProductProps, 'image'> & {
  images: ImageByQuery[];
};

export type ProductDetailsByQuery = Omit<ProductDetailsProps, 'images'> & {
  images: ImageByQuery[];
};
