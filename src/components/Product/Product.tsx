import { Icon } from 'components';
import { ROUTES } from 'constants/routes';
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
  return (
    <S.Wrapper type={type}>
      <Link href={ROUTES.PRODUCT_BY_ID(id)} passHref>
        <S.Content>
          <S.Image src={image} alt={name} />
          <S.Infos>
            <p>{name}</p>
            <span>{price}</span>
          </S.Infos>
        </S.Content>
      </Link>

      <S.RemoveProduct>
        {type === 'horizontal' ? <span>Remover</span> : <Icon icon="IcCart" />}
      </S.RemoveProduct>
    </S.Wrapper>
  );
};
