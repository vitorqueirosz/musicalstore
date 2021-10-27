import { Base } from 'templates';
import {
  BannerProps,
  BannerSlider,
  ProductsSection,
  ProductsSectionProps,
} from 'components';

export type HomeProps = {
  banners: BannerProps[];
  releases: ProductsSectionProps;
  highlights: ProductsSectionProps;
};

export const Home = ({ banners, releases, highlights }: HomeProps) => {
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
