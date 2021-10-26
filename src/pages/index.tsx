import { ProductsSectionProps } from 'components';
import { useHomeProducts } from 'hooks';
import type { GetStaticProps } from 'next';
import { Home as HomeTemplate } from 'templates';
import { getHomeProducts, HomeQueryPayload } from 'utils/home';
import { setDefaultUrlToImg } from 'utils/setDefaultUrlToImg';

const fallbackValue: ProductsSectionProps = {
  title: '',
  products: [],
};

const Home = ({ home }: HomeQueryPayload) => {
  const { data } = useHomeProducts({
    home,
  });

  const homeProps = {
    ...data?.home,
    banners: data?.home.banners.map((banner) => ({
      ...banner,
      image: setDefaultUrlToImg(banner.image.url),
    })),
  };

  return (
    <HomeTemplate
      banners={homeProps.banners ?? []}
      releases={homeProps.releases ?? fallbackValue}
      highlights={homeProps.highlights ?? fallbackValue}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await getHomeProducts();

  return {
    props: {
      home,
    },
  };
};

export default Home;
