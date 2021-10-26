import { useHomeProducts } from 'hooks';
import type { GetStaticProps } from 'next';
import { Home as HomeTemplate } from 'templates';
import { getHomeProducts, HomeQueryPayload } from 'utils/home';
import { homeMapper } from 'utils/mappers';

const Home = ({ home }: HomeQueryPayload) => {
  const { data } = useHomeProducts({
    home,
  });

  return <HomeTemplate {...homeMapper(data)} />;
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
