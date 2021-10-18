import ReactSlick, { Settings } from 'react-slick';
import * as S from './Slider.styles';

type SlickProps = {
  settings: Settings;
  children: React.ReactNode;
};

export const Slider = ({ settings, children }: SlickProps) => {
  return (
    <S.Wrapper>
      <ReactSlick {...settings}>{children}</ReactSlick>
    </S.Wrapper>
  );
};
