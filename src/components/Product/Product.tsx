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
  const { addToCart } = useCart();

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

      <S.RemoveProduct onClick={() => addToCart(id)}>
        {type === 'horizontal' ? 'Remover' : <Icon icon="IcCart" />}
      </S.RemoveProduct>
    </S.Wrapper>
  );
};
