import { useEffect, useState } from 'react';
import { Button } from 'components';
import * as S from './ProductDetails.styles';

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

export const ProductDetails = ({
  images,
  name,
  price,
  description,
  brand,
}: ProductDetailsProps) => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleSelectedImage = (image: string) => setSelectedImage(image);

  useEffect(() => {
    const [firstImage] = images;
    setSelectedImage(firstImage);
  }, [images]);

  return (
    <S.Wrapper>
      <S.Grid>
        <S.Images>
          {images.map((image) => (
            <img
              aria-label="thumb image"
              key={image}
              src={image}
              alt={image}
              onClick={() => handleSelectedImage(image)}
            />
          ))}
        </S.Images>
        <S.Image
          aria-label="highlight image"
          src={selectedImage}
          alt={selectedImage}
        />

        <S.Infos>
          <S.Details>
            <h3>{name}</h3>
            <small>Marca: {brand}</small>

            <p>{price}</p>
          </S.Details>

          <S.ButtonContainer>
            <Button>Comprar</Button>
          </S.ButtonContainer>
        </S.Infos>
      </S.Grid>
      {!!description && (
        <S.Description>
          <span>Descricao</span>

          <p>{description}</p>
        </S.Description>
      )}
    </S.Wrapper>
  );
};
