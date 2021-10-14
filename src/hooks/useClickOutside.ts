/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

export const useClickOutside = (callback: (state?: boolean) => void) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (targetRef.current) {
        !targetRef.current.contains(event.target) && callback();
      }
    };

    document.addEventListener('mousedown', handleClick, false);
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, [callback]);

  return targetRef;
};
