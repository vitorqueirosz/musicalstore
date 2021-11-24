import { useSearchProducts } from 'hooks';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ProductByQuery, WithChildren } from 'types/common';

type CartContextData = {
  products: ProductByQuery[] | undefined;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  isLoading: boolean;
  isInTheCart: (id: string) => boolean;
};

const initialValues = {
  products: [],
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  isLoading: false,
  isInTheCart: () => false,
};

const CartContext = createContext<CartContextData>(initialValues);

export const CartProvider = ({ children }: WithChildren) => {
  const [productIds, setProductIds] = useState<string[]>([]);

  const { data, isLoading } = useSearchProducts({
    query: { id: productIds },
    skip: !productIds.length,
  });

  console.log(data);

  const addToCart = useCallback((id: string) => {
    setProductIds((prevState) => {
      if (!prevState) return [id];

      return [id, ...prevState];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setProductIds((prevState) =>
      prevState?.filter((productId) => productId !== id),
    );
  }, []);

  const isInTheCart = useCallback(
    (id: string) => productIds.includes(id),
    [productIds],
  );

  const value = useMemo(() => {
    return {
      products: data?.products || [],
      addToCart,
      removeFromCart,
      isLoading,
      isInTheCart,
    };
  }, [addToCart, removeFromCart, isLoading, data?.products, isInTheCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
