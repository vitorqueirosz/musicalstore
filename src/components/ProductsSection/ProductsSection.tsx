import { Slider, Product, Icon, ProductProps, Heading } from 'components';
import * as S from './ProductsSection.styles';
import { Settings } from 'react-slick';

export type ProductsSectionProps = {
  title: string;
  products: ProductProps[];
};

const settings: Settings = {
  dots: false,
  slidesToShow: 7.5,
  slidesToScroll: 2,
  infinite: false,
  arrows: true,
  prevArrow: <Icon icon="IcChevronLeft" />,
  nextArrow: <Icon icon="IcChevronRight" />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export const ProductsSection = ({ title, products }: ProductsSectionProps) => {
  return (
    <S.Wrapper>
      <Heading>{title}</Heading>

      <S.Content>
        <Slider settings={settings}>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </Slider>
      </S.Content>
    </S.Wrapper>
  );
};
