/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

export interface IsPlayingContextType {
  isPlayingSong: {
    id: string;
    status: boolean;
    finished?: boolean;
  };
  setIsPlayingSong: React.Dispatch<React.SetStateAction<{ id: string; status: boolean; finished?: boolean }>>;
}

const defaultValue = {
  isPlayingSong: {
    id: '',
    status: false,
  },
  setIsPlayingSong: () => {},
};

export const IsPlayingContext = React.createContext<IsPlayingContextType>(defaultValue);

export const IsPlayingProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const [isPlayingSong, setIsPlayingSong] = React.useState(defaultValue.isPlayingSong);

  return <IsPlayingContext.Provider value={{ isPlayingSong, setIsPlayingSong }}>{children}</IsPlayingContext.Provider>;
};
