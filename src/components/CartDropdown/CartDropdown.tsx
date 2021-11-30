import { Product, ProductProps } from 'components';
import * as S from './CartDropdown.styles';

type CartDropdownProps = {
  products: ProductProps[];
};

export const CartDropdown = ({ products }: CartDropdownProps) => {
  return (
    <S.Wrapper>
      <S.Title>Carrinho</S.Title>

      {products.map((product) => (
        <Product key={product.id} {...product} type="horizontal" />
      ))}
    </S.Wrapper>
  );
};
