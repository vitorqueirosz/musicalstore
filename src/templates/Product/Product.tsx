import { useEffect, useState } from 'react';
import { Base } from 'templates';
import { Button } from 'components';
import * as S from './Product.styles';

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
  const [selectedImage, setSelectedImage] = useState('');

  const handleSelectedImage = (image: string) => setSelectedImage(image);

  useEffect(() => {
    const [firstImage] = product.images;
    setSelectedImage(firstImage);
  }, [product.images]);

  return (
    <Base>
      <S.Content>
        <S.Grid>
          <S.Images>
            {product.images.map((image) => (
              <img
                key={image}
                src={image}
                alt={image}
                onClick={() => handleSelectedImage(image)}
              />
            ))}
          </S.Images>
          <S.Image src={selectedImage} alt={selectedImage} />

          <S.Infos>
            <S.Details>
              <h3>{product.name}</h3>
              <small>Marca: {product.brand}</small>

              <p>{product.price}</p>
            </S.Details>

            <S.ButtonContainer>
              <Button>Comprar</Button>
            </S.ButtonContainer>
          </S.Infos>
        </S.Grid>
        {!!product.description && (
          <S.Description>
            <span>Descricao</span>

            <p>{product.description}</p>
          </S.Description>
        )}
      </S.Content>
    </Base>
  );
};
