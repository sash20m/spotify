import * as React from 'react';
import { initializeSpotifyPlayer } from 'libs/spotifyWebPlayer';

interface Props {
  children: React.ReactNode;
}

export const Middleware: React.FC<Props> = ({ children }) => {
  React.useEffect(() => {
    if (window.Spotify?.Player) initializeSpotifyPlayer();
  }, [window.Spotify]);

  return <>{children}</>;
};
