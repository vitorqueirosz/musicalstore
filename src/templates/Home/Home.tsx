import { Base } from 'templates/Base/Base';
import {
  BannerSlider,
  ProductsSection,
  ProductsSectionProps,
} from 'components';

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

export type HomeProps = {
  releases: ProductsSectionProps;
  highlights: ProductsSectionProps;
};

export const Home = ({ releases, highlights }: HomeProps) => {
  return (
    <Base>
      <BannerSlider banners={banners} />
      {[releases, highlights].map((item) => (
        <ProductsSection
          key={item.title}
          title={item.title}
          products={item.products}
        />
      ))}
    </Base>
  );
};
