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
  plusToCart: (id: string) => void;
  minusToCart: (id: string) => void;
  getQuantity: (id: string) => number;
};

const initialValues = {
  products: [],
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  isLoading: false,
  isInTheCart: () => false,
  plusToCart: () => undefined,
  minusToCart: () => undefined,
  getQuantity: () => 0,
};

type ProductPayload = {
  id: string;
  quantity: number;
};

const CartContext = createContext<CartContextData>(initialValues);

export const CartProvider = ({ children }: WithChildren) => {
  const [products, setProducts] = useState<ProductPayload[]>([]);

  const { data, isLoading } = useSearchProducts({
    query: { id: products.map((p) => p.id) },
    skip: !products.length,
  });

  const addToCart = useCallback((id: string) => {
    setProducts((prevState) => [
      {
        id,
        quantity: 1,
      },
      ...prevState,
    ]);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== id),
    );
  }, []);

  const isInTheCart = useCallback(
    (id: string) => products.some((product) => product.id === id),
    [products],
  );

  const plusToCart = useCallback((id: string) => {
    setProducts((prevState) => {
      const productIndex = prevState.findIndex((product) => product.id === id);
      const products = [...prevState];

      products[productIndex] = {
        ...products[productIndex],
        quantity: products[productIndex].quantity + 1,
      };

      return products;
    });
  }, []);

  const minusToCart = useCallback(
    (id: string) => {
      setProducts((prevState) => {
        const productIndex = prevState.findIndex(
          (product) => product.id === id,
        );
        const products = [...prevState];
        const product = products[productIndex];

        const isEqualToOne = product.quantity === 1;

        if (isEqualToOne) {
          removeFromCart(id);
          return products;
        }

        products[productIndex] = {
          ...product,
          quantity: product.quantity - 1,
        };

        return products;
      });
    },
    [removeFromCart],
  );

  const getQuantity = useCallback(
    (id: string) => {
      return products.find((product) => product.id === id)?.quantity || 0;
    },
    [products],
  );

  const value = useMemo(() => {
    return {
      products: data?.products || [],
      addToCart,
      removeFromCart,
      isLoading,
      isInTheCart,
      plusToCart,
      minusToCart,
      getQuantity,
    };
  }, [
    addToCart,
    removeFromCart,
    isLoading,
    data?.products,
    isInTheCart,
    plusToCart,
    minusToCart,
    getQuantity,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
