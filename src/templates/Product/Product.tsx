import { Base } from 'templates';
import { ProductDetailsProps, ProductDetails } from 'components';

type ProductTemplateProps = {
  product: ProductDetailsProps;
};

export const Product = ({ product }: ProductTemplateProps) => {
  return (
    <Base>
      <ProductDetails {...product} />
    </Base>
  );
};
