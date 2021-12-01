import type { GetStaticProps } from 'next';
import { Home as HomeTemplate } from 'templates';
import { getHomeProducts, HomeQueryPayload } from 'utils/home';
import { homeMapper } from 'utils/mappers';

const Home = ({ home }: HomeQueryPayload) => {
  return <HomeTemplate {...homeMapper({ home })} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getHomeProducts();

  return {
    props: {
      home: data.home,
    },
  };
};

export default Home;
