import { Icon } from 'components';
import * as S from './Product.styles';

export type ProductProps = {
  id: string;
  image: string;
  name: string;
  price: string;
  type?: 'vertical' | 'horizontal';
};

export const Product = ({
  image,
  name,
  price,
  type = 'vertical',
}: ProductProps) => {
  return (
    <S.Wrapper type={type}>
      <S.Content>
        <S.Image src={image} alt={name} />
        <S.Infos>
          <p>{name}</p>
          <span>{price}</span>
        </S.Infos>
      </S.Content>

      <S.RemoveProduct>
        {type === 'horizontal' ? <span>Remover</span> : <Icon icon="IcCart" />}
      </S.RemoveProduct>
    </S.Wrapper>
  );
};
