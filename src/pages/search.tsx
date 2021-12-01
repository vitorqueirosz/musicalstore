import { GetServerSideProps } from 'next';
import { Search as SearchTemplate } from 'templates';
import { initializeApollo } from 'utils/apollo';
import { getSearchProducts } from 'utils/search';

export const Search = () => {
  return <SearchTemplate />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo();
  await getSearchProducts(query);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Search;
