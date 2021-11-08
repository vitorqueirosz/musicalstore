import { useQuery } from 'react-query';
import { getProductById, ProductQueryPayload } from 'utils/product';

export const useProductById = (
  id: string,
  initialData: ProductQueryPayload,
) => {
  return useQuery<ProductQueryPayload>(
    ['product', id],
    () => getProductById(id),
    { initialData },
  );
};
