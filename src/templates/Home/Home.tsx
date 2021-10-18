import { Base } from 'templates/Base/Base';
import { BannerSlider } from 'components';

const banners = [
  {
    image:
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/56/bd.jpg',
    buttonLabel: 'Acessar',
  },
  {
    image:
      'http://cdn.shopify.com/s/files/1/0038/1966/7502/articles/gibson-les-paul_1200x1200.jpeg?v=1563898865',
  },
];

export const Home = () => {
  return (
    <Base>
      <BannerSlider banners={banners} />
    </Base>
  );
};
