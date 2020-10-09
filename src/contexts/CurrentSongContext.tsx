/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import { defaultSong } from 'resources';

export interface CurrentSongType {
  added_at?: string;
  track: {
    album: {
      images: {
        height: number;
        url: string;
      }[];
      name: string;
    };

    name: string;
    artists: {
      name: string;
    }[];
    duration_ms: number;
    id: string;
    uri: string;
  };
}

export interface CurrentSongContextType {
  currentSong: CurrentSongType;
  setCurrentSong: React.Dispatch<React.SetStateAction<CurrentSongType>>;
}

const defaultValue = {
  currentSong: defaultSong,
  setCurrentSong: () => {},
};

export const CurrentSongContext = React.createContext<CurrentSongContextType>(defaultValue);

export const CurrentSongProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const [currentSong, setCurrentSong] = React.useState<CurrentSongType>(defaultSong);

  return <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>{children}</CurrentSongContext.Provider>;
};
