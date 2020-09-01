import { useState } from 'react';

export const useStateHandlers = (initialState: object): Array<any> => {
  const [state, setState] = useState(initialState);

  const setNewState = (newState: object): void => {
    if (typeof newState === 'function') {
      setState((prevState) => ({ ...prevState, ...newState(prevState) }));
    } else {
      setState((prevState) => ({
        ...prevState,
        ...newState,
      }));
    }
  };

  return [state, setNewState, (): void => setState(initialState)];
};
