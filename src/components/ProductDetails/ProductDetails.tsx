import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Button, Icon } from 'components';
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
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const imgRef = useRef<HTMLImageElement | null>(null);
  const targetRef = useRef<HTMLSpanElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  const addQuantity = () => setQuantity((prevState) => prevState + 1);
  const removeQuantity = () => setQuantity((prevState) => prevState - 1);

  const handleSelectedImage = (image: string) => setSelectedImage(image);

  useEffect(() => {
    const [firstImage] = images;
    setSelectedImage(firstImage);
  }, [images]);

  const handleZoom = (
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
  ) => {
    event.preventDefault();
    setIsReady(true);

    const targetValue = targetRef.current!;
    const ImgValue = imgRef.current!;

    const targetWidth = targetValue.clientWidth;
    const targetHeight = targetValue.clientHeight;

    const posX = event.pageX - targetValue.offsetLeft;
    const posY = event.pageY - targetValue.offsetTop;

    const xRatio = (ImgValue.width - targetWidth) / targetWidth;
    const yRatio = (ImgValue.height - targetHeight) / targetHeight;

    ImgValue.style.left = `${posX * -xRatio}px`;
    ImgValue.style.top = `${posY * -yRatio}px`;
  };

  const handleMouseLeave = () => setIsReady(false);

  return (
    <S.Wrapper>
      <S.Grid>
        <S.Images>
          {images.map((image) => (
            <S.ThumbImage
              aria-label="thumb image"
              key={image}
              src={image}
              alt={image}
              onClick={() => handleSelectedImage(image)}
              selected={selectedImage === image}
            />
          ))}
        </S.Images>
        <S.Box>
          <span
            ref={targetRef}
            onMouseMove={handleZoom}
            onMouseLeave={handleMouseLeave}
          >
            <S.Image src={selectedImage} aria-label="highlight image" />
            <S.ZoomedImage
              ref={imgRef}
              src={selectedImage}
              alt={selectedImage}
              show={isReady}
            />
          </span>
        </S.Box>

        <S.Infos>
          <S.Details>
            <h3>{name}</h3>
            <small>Marca: {brand}</small>

            <p>{price}</p>
          </S.Details>

          <S.ButtonContainer>
            <S.AmountContainer>
              <S.ButtonState onClick={removeQuantity}>
                <Icon icon="IcMinus" />
              </S.ButtonState>

              <span>{quantity}</span>

              <S.ButtonState onClick={addQuantity}>
                <Icon icon="IcPlus" />
              </S.ButtonState>
            </S.AmountContainer>
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
