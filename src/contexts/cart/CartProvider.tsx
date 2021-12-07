import { ProductProps } from 'components';
import { useSearchProducts, useLocalStorage } from 'hooks';
import currency from 'currency.js';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { WithChildren } from 'types/common';
import { productsWithDefaultImgUrl } from 'utils/mappers';
import { CART_KEY } from 'constants/config';

type CartContextData = {
  products: ProductProps[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  isLoading: boolean;
  isInTheCart: (id: string) => boolean;
  plusToCart: (id: string) => void;
  minusToCart: (id: string) => void;
  getQuantity: (id: string) => number;
  total: number;
  cartLength: number;
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
  total: 0,
  cartLength: 0,
};

type ProductPayload = {
  id: string;
  quantity: number;
};

export const MAX_PRODUCTS = 12;

const regexForPurePrice = /[.,R$]/g;
const formatOptions = { fromCents: true, precision: 2 };

const CartContext = createContext<CartContextData>(initialValues);

export const CartProvider = ({ children }: WithChildren) => {
  const [storage, setStorage] = useLocalStorage<string[]>(CART_KEY);
  const [products, setProducts] = useState<ProductPayload[]>(() => {
    if (storage) {
      return storage.map((i) => ({ id: i, quantity: 1 }));
    }
    return [];
  });

  const productIds = useMemo(() => products.map((p) => p.id), [products]);

  const { data, loading } = useSearchProducts({
    skip: !products.length,
    variables: {
      limit: MAX_PRODUCTS,
      where: {
        id: productIds,
      },
    },
  });

  useEffect(() => {
    setStorage(productIds);
  }, [productIds, setStorage]);

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

  const total = useMemo(() => {
    const totalAdded = data?.products.reduce((acc, product) => {
      const price = product.price.replace(regexForPurePrice, '');

      return (acc = currency(acc).add(price).value);
    }, 0);

    const totalPrice = currency(totalAdded || 0, formatOptions).value;

    return totalPrice;
  }, [data?.products]);

  const value = useMemo(() => {
    return {
      products: productsWithDefaultImgUrl(data?.products),
      addToCart,
      removeFromCart,
      isLoading: loading,
      isInTheCart,
      plusToCart,
      minusToCart,
      getQuantity,
      total,
      cartLength: products.length,
    };
  }, [
    addToCart,
    removeFromCart,
    loading,
    data?.products,
    isInTheCart,
    plusToCart,
    minusToCart,
    getQuantity,
    total,
    products.length,
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
