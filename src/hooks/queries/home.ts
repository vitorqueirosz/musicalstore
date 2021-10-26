import { useQuery } from 'react-query';
import { ProductProps } from 'components';
import { getHomeProducts } from 'utils/home';
import { HOME } from 'constants/urls';

type ProductsPayload = {
  title: string;
  products: ProductProps[];
};

export type HomePayload = {
  home: {
    releases: ProductsPayload;
    highlights: ProductsPayload;
  };
};

export const useHomeProducts = (initialData: HomePayload) => {
  return useQuery(HOME, getHomeProducts, { initialData });
};
