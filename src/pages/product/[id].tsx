import { useProductById } from 'hooks';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { Product as ProductTemplate } from 'templates';
import { productDetailsMapper } from 'utils/mappers';
import { getProductById, ProductQueryPayload } from 'utils/product';
import { getSearchProducts } from 'utils/search';

const Product = ({ products }: ProductQueryPayload) => {
  const [product] = products;

  const { data } = useProductById(product.id, {
    products,
  });

  const productDetails = data?.products[0];

  return <ProductTemplate product={productDetailsMapper(productDetails!)} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getSearchProducts();

  const paths = products.map(({ id }) => ({
    params: { id },
  }));

  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { products } = await getProductById(`${params?.id}`);

  if (!products.length) return { notFound: true };

  return {
    props: {
      products,
    },
  };
};

export default Product;
