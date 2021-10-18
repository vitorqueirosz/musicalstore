import { Slider, Banner } from 'components';
import { BannerProps } from 'components/Banner/Banner';
import { Settings } from 'react-slick';
import * as S from './BannerSlider.styles';

export type BannerSliderProps = {
  banners: BannerProps[];
};

const settings: Settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  responsive: [],
};

export const BannerSlider = ({ banners }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {banners.map((banner) => (
          <Banner key={banner.image} {...banner} />
        ))}
      </Slider>
    </S.Wrapper>
  );
};
