import * as S from './Banner.styles';

type BannerProps = {
  image: string;
};

export const Banner = ({ image }: BannerProps) => {
  return <S.Wrapper src={image} />;
};
