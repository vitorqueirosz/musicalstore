import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Product as ProductTemplate } from 'templates';
import { productDetailsMapper } from 'utils/mappers';
import { getProductById, ProductQueryPayload } from 'utils/product';
import { getSearchProducts } from 'utils/search';

const Product = ({ products }: ProductQueryPayload) => {
  const router = useRouter();

  if (router.isFallback) return null;

  const [product] = products;

  return <ProductTemplate product={productDetailsMapper(product!)} />;
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
