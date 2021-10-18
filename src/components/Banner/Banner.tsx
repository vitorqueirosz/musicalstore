import { Button } from 'components';
import * as S from './Banner.styles';

export type BannerProps = {
  image: string;
  buttonLabel?: string;
};

export const Banner = ({ image, buttonLabel }: BannerProps) => {
  return (
    <S.Wrapper aria-label="banner" src={image}>
      {buttonLabel && (
        <S.Overlay>
          <Button>{buttonLabel}</Button>
        </S.Overlay>
      )}
    </S.Wrapper>
  );
};
