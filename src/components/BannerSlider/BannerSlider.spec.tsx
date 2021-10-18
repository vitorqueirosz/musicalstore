import 'match-media-mock';
import { renderWithTheme } from 'utils/tests/render';
import { BannerSlider, BannerSliderProps } from './BannerSlider';

const props: BannerSliderProps = {
  banners: [
    {
      image: 'test',
    },
    {
      image: 'test2',
    },
  ],
};

describe('<BannerSlider />', () => {
  it('should render BannerSlider correctly', () => {
    const { container } = renderWithTheme(<BannerSlider {...props} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);
    expect(container.querySelectorAll('.slick-dots')).toHaveLength(1);
  });
});
