import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';
import { WithChildren } from 'types/common';
import { CartProvider, useCart } from './CartProvider';
import { apolloCartMock, productsMocked } from './CartProvider.mock';
import { act } from 'react-test-renderer';
import { CART_KEY, isSSR } from 'constants/config';

export const setLocalStorage = (key: string, value: string[]) => {
  if (isSSR) return;

  window.localStorage.setItem(key, JSON.stringify(value));
};

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should return items and the infos from the cart', async () => {
    const Wrapper = ({ children }: WithChildren) => {
      return (
        <MockedProvider mocks={apolloCartMock}>
          <CartProvider>{children}</CartProvider>
        </MockedProvider>
      );
    };

    setLocalStorage(CART_KEY, ['1', '2']);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper: Wrapper,
    });

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);

    expect(result.current.products).toStrictEqual(productsMocked);
    expect(result.current.getQuantity('1')).toBe(1);
    expect(result.current.total).toBe(2800.8);
  });
  it('should return if the item is in the cart', async () => {
    const Wrapper = ({ children }: WithChildren) => {
      return (
        <MockedProvider mocks={apolloCartMock}>
          <CartProvider>{children}</CartProvider>
        </MockedProvider>
      );
    };

    setLocalStorage(CART_KEY, ['1']);

    const { result } = renderHook(() => useCart(), {
      wrapper: Wrapper,
    });

    expect(result.current.isInTheCart('1')).toBe(true);
    expect(result.current.isInTheCart('2')).toBe(false);
  });
  it('should add the item to cart', async () => {
    const Wrapper = ({ children }: WithChildren) => {
      return (
        <MockedProvider mocks={apolloCartMock}>
          <CartProvider>{children}</CartProvider>
        </MockedProvider>
      );
    };

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.addToCart('1');
    });

    await waitForNextUpdate();

    expect(result.current.isInTheCart('1')).toBe(true);
    expect(result.current.cartLength).toBe(1);
    expect(window.localStorage.getItem(CART_KEY)).toBe(JSON.stringify(['1']));
  });
  it('should remove the item from cart', async () => {
    const Wrapper = ({ children }: WithChildren) => {
      return (
        <MockedProvider mocks={apolloCartMock}>
          <CartProvider>{children}</CartProvider>
        </MockedProvider>
      );
    };

    const productId = '1';
    setLocalStorage(CART_KEY, [productId]);

    const { result } = renderHook(() => useCart(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.removeFromCart(productId);
    });

    expect(result.current.cartLength).toBe(0);
    expect(window.localStorage.getItem(CART_KEY)).toBe(JSON.stringify([]));
  });
  it('should add the item quantity to the cart', async () => {
    const Wrapper = ({ children }: WithChildren) => {
      return (
        <MockedProvider mocks={apolloCartMock}>
          <CartProvider>{children}</CartProvider>
        </MockedProvider>
      );
    };

    const productId = '1';

    setLocalStorage(CART_KEY, [productId]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.plusToCart(productId);
    });

    await waitForNextUpdate();

    expect(result.current.getQuantity(productId)).toBe(2);
  });
  it('should remove the item quantity to the cart', async () => {
    const Wrapper = ({ children }: WithChildren) => {
      return (
        <MockedProvider mocks={apolloCartMock}>
          <CartProvider>{children}</CartProvider>
        </MockedProvider>
      );
    };

    const productId = '1';
    setLocalStorage(CART_KEY, [productId]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.plusToCart(productId);
    });

    await waitForNextUpdate();

    expect(result.current.getQuantity(productId)).toBe(2);

    act(() => {
      result.current.minusToCart(productId);
    });

    expect(result.current.getQuantity(productId)).toBe(1);
  });
  it('should remove the item from cart when has no length', async () => {
    const Wrapper = ({ children }: WithChildren) => {
      return (
        <MockedProvider mocks={apolloCartMock}>
          <CartProvider>{children}</CartProvider>
        </MockedProvider>
      );
    };

    const productId = '1';
    setLocalStorage(CART_KEY, [productId]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.plusToCart(productId);
      result.current.plusToCart(productId);
    });

    await waitForNextUpdate();

    expect(result.current.getQuantity(productId)).toBe(3);

    act(() => {
      result.current.minusToCart(productId);
      result.current.minusToCart(productId);
      result.current.minusToCart(productId);
    });

    expect(result.current.cartLength).toBe(0);
  });
});
