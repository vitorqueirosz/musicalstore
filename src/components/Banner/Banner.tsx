import * as S from './Banner.styles';

type BannerProps = {
  img: string;
};

export const Banner = ({ img }: BannerProps) => {
  return <S.Wrapper src={img} />;
};
