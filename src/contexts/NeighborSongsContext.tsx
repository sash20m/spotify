/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

export interface NeighborSongsContextType {
  neighborSongs: any;
  setNeighborSongs: React.Dispatch<React.SetStateAction<any>>;
}

const defaultValue = {
  neighborSongs: {
    previousSong: {},
    nextSong: {},
  },
  setNeighborSongs: () => {},
};

export const NeighborSongsContext = React.createContext<NeighborSongsContextType>(defaultValue);

export const NeighborSongsProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const [neighborSongs, setNeighborSongs] = React.useState({});

  return (
    <NeighborSongsContext.Provider value={{ neighborSongs, setNeighborSongs }}>
      {children}
    </NeighborSongsContext.Provider>
  );
};
