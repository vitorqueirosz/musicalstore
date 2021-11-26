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

export const Product = ({
  id,
  image,
  name,
  price,
  type = 'vertical',
}: ProductProps) => {
  const {
    addToCart,
    removeFromCart,
    isInTheCart,
    getQuantity,
    plusToCart,
    minusToCart,
  } = useCart();

  const isProductInTheCart = isInTheCart(id);

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
        <S.ButtonsContainer isInTheCart={isProductInTheCart}>
          <S.ButtonCart
            onClick={() =>
              isProductInTheCart ? removeFromCart(id) : addToCart(id)
            }
          >
            <Icon
              aria-label={
                isProductInTheCart ? 'remove from cart' : 'add to cart'
              }
              icon={isProductInTheCart ? 'IcTrash' : 'IcCart'}
            />
          </S.ButtonCart>

          <S.AmountContainer>
            <S.ButtonState onClick={() => minusToCart(id)}>
              <Icon icon="IcMinus" />
            </S.ButtonState>

            <span>{getQuantity(id)}</span>

            <S.ButtonState onClick={() => plusToCart(id)}>
              <Icon icon="IcPlus" />
            </S.ButtonState>
          </S.AmountContainer>
        </S.ButtonsContainer>
      ) : (
        <S.RemoveProduct onClick={() => addToCart(id)}>Remover</S.RemoveProduct>
      )}
    </S.Wrapper>
  );
};
