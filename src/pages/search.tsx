import { GetServerSideProps } from 'next';
import { Search as SearchTemplate } from 'templates';
import { getSearchProducts, SearchQueryPayload } from 'utils/search';

export const Search = ({ products }: SearchQueryPayload) => {
  return <SearchTemplate initialData={products} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { products } = await getSearchProducts(query);

  return {
    props: {
      products,
    },
  };
};

export default Search;
