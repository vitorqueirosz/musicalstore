import { ProductsSectionProps } from 'components';
import { HomePayload, useHomeProducts } from 'hooks';
import type { GetStaticProps } from 'next';
import { Home as HomeTemplate } from 'templates';
import { getHomeProducts } from 'utils/home';

const fallbackValue: ProductsSectionProps = {
  title: '',
  products: [],
};

const Home = ({ home }: HomePayload) => {
  const { data } = useHomeProducts({
    home,
  });

  return (
    <HomeTemplate
      releases={data?.home?.releases ?? fallbackValue}
      highlights={data?.home?.highlights ?? fallbackValue}
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
