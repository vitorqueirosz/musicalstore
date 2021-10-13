import { useReducer } from 'react';

const toggler = (state: boolean) => !state;

export const useToggle = (initialState = false) => {
  return useReducer(toggler, initialState);
};
