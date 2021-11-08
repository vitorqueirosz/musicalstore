import { Base } from 'templates';

export type ProductDetailsProps = {
  id: string;
  images: string[];
  name: string;
  price: string;
  description?: string;
  brand: string;
  category: string;
  type: string;
};

type ProductTemplateProps = {
  product: ProductDetailsProps;
};

export const Product = ({ product }: ProductTemplateProps) => {
  return (
    <Base>
      <span>{product.name}</span>
    </Base>
  );
};
