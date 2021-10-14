import { useCallback, useState } from 'react';

type TogglePayload = [boolean, (state?: boolean) => void];

export const useToggle = (initialState = false): TogglePayload => {
  const [toggleState, setToggleState] = useState(initialState);

  const toggler = useCallback(
    (state?: boolean) => setToggleState((prevState) => state ?? !prevState),
    [],
  );

  return [toggleState, toggler];
};
