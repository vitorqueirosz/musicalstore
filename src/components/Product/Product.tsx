import { useEffect, useState } from 'react';
import { Icon } from 'components';
import { ROUTES } from 'constants/routes';
import { useCart } from 'contexts';
import Link from 'next/link';
import * as S from './Product.styles';

export type ProductProps = {
  id: string;
  image: string;
  name: string;
  price: string;
  type?: 'vertical' | 'horizontal';
};

const AmountContainer = ({ id }: Pick<ProductProps, 'id'>) => {
  const { getQuantity, plusToCart, minusToCart } = useCart();

  return (
    <S.AmountContainer>
      <S.ButtonState onClick={() => minusToCart(id)}>
        <Icon icon="IcMinus" />
      </S.ButtonState>

      <span>{getQuantity(id)}</span>

      <S.ButtonState onClick={() => plusToCart(id)}>
        <Icon icon="IcPlus" />
      </S.ButtonState>
    </S.AmountContainer>
  );
};

export const Product = ({
  id,
  image,
  name,
  price,
  type = 'vertical',
}: ProductProps) => {
  const { addToCart, removeFromCart, isInTheCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isProductInTheCart = isInTheCart(id);
    setIsInCart(isProductInTheCart);
  }, [id, isInTheCart]);

  return (
    <S.Wrapper type={type}>
      <Link href={ROUTES.PRODUCT_BY_ID(id)} passHref>
        <S.Content aria-label="link">
          <S.Image src={image} alt={name} />
          <S.Infos>
            <p>{name}</p>
            <span>{price}</span>
          </S.Infos>
        </S.Content>
      </Link>

      {type === 'vertical' ? (
        <S.ButtonsContainer isInTheCart={isInCart}>
          <S.ButtonCart
            onClick={() => (isInCart ? removeFromCart(id) : addToCart(id))}
          >
            <Icon
              aria-label={isInCart ? 'remove from cart' : 'add to cart'}
              icon={isInCart ? 'IcTrash' : 'IcCart'}
            />
          </S.ButtonCart>

          <AmountContainer id={id} />
        </S.ButtonsContainer>
      ) : (
        <aside>
          <S.RemoveProduct onClick={() => removeFromCart(id)}>
            Remover
          </S.RemoveProduct>
          <AmountContainer id={id} />
        </aside>
      )}
    </S.Wrapper>
  );
};
