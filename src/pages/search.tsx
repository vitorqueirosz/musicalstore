import { GetServerSideProps } from 'next';
import { Search as SearchTemplate } from 'templates';
import { ProductsByQuery } from 'types/common';
import { getSearchProducts } from 'utils/search';

type SearchProps = {
  products: ProductsByQuery[];
};

export const Search = ({ products }: SearchProps) => {
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
