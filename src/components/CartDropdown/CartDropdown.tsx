import { products } from './CartDropdown.mock';
import { Product } from 'components';
import * as S from './CartDropdown.styles';

export const CartDropdown = () => {
  return (
    <S.Wrapper>
      <S.Title>Carrinho</S.Title>

      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </S.Wrapper>
  );
};
