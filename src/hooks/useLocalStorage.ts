import { isSSR } from 'constants/config';
import { useCallback, useState } from 'react';

type ValueTypeFunction<T> = (value: T) => T;

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T, (value: T | ValueTypeFunction<T>) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (isSSR) return initialValue;

    const item = window.localStorage.getItem(key);

    if (item) return JSON.parse(item);

    return initialValue;
  });

  const setValue = useCallback(
    (value: T | ValueTypeFunction<T>) => {
      if (isSSR) return;

      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    },
    [key, storedValue],
  );

  return [storedValue, setValue];
};
