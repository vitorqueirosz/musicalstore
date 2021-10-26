import { ProductProps } from 'components';

export type ImageByQuery = {
  url: string;
};

export type ProductsByQuery = Omit<ProductProps, 'image'> & {
  images: ImageByQuery[];
};
