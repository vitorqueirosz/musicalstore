import { useProductById } from 'hooks';
import type { GetStaticProps } from 'next';
import { Product as ProductTemplate } from 'templates';
import { productDetailsMapper } from 'utils/mappers';
import { getProductById, ProductQueryPayload } from 'utils/product';

const Product = ({ products }: ProductQueryPayload) => {
  const [product] = products;

  const { data } = useProductById(product.id, {
    products,
  });

  const productDetails = data?.products[0];

  return <ProductTemplate product={productDetailsMapper(productDetails!)} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { products } = await getProductById(`${params?.id}`);

  if (!products.length) return { notFound: true };

  const [product] = products;

  return {
    props: {
      product,
    },
  };
};

export default Product;
