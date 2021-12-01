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

  return <ProductTemplate product={productDetailsMapper(product)} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getSearchProducts();

  const paths = data.products.map(({ id }) => ({
    params: { id },
  }));

  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await getProductById(`${params?.id}`);

  if (!data.products.length) return { notFound: true };

  return {
    props: {
      products: data.products,
    },
  };
};

export default Product;
