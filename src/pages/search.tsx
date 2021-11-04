import { GetServerSideProps } from 'next';
import { Search as SearchTemplate, SearchProps } from 'templates';
import { getSearchProducts } from 'utils/search';

export const Search = ({ products }: SearchProps) => {
  return <SearchTemplate products={products} />;
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
