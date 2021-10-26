import { Button } from 'components';
import * as S from './Banner.styles';

export type BannerProps = {
  image: string;
  buttonLabel?: string;
  buttonLink?: string;
  description?: string;
};

export const Banner = ({ image, buttonLabel, buttonLink }: BannerProps) => {
  return (
    <S.Wrapper aria-label="banner" src={image}>
      {buttonLabel && (
        <S.Overlay>
          <Button role="link" as="a" href={buttonLink}>
            {buttonLabel}
          </Button>
        </S.Overlay>
      )}
    </S.Wrapper>
  );
};
