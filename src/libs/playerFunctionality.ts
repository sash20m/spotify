import { initializeSpotifyPlayer } from './spotifyWebPlayer';

interface PlayerProps {
  spotify_uri?: string;
  playerInstance: {
    _options: {
      getOAuthToken: (token: any) => string;
      id: string;
    };
  };
}

export const playerFunctionality = (): {
  playSong: (uri: string) => void;
  stopSong: () => void;
  pauseSong: () => void;
  resumeSong: () => void;
  seekPosition: (position_ms: number) => void;
  setVolume: (percent: number) => void;
} => {
  const player = initializeSpotifyPlayer();

  const stopSong = (): void => {
    const stop = ({
      playerInstance: {
        _options: { getOAuthToken, id },
      },
    }: PlayerProps): void => {
      getOAuthToken((token: string) => {
        fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
      });
    };

    stop({
      playerInstance: player,
    });
  };

  const playSong = (uri: string): void => {
    const play = ({
      spotify_uri,
      playerInstance: {
        _options: { getOAuthToken, id },
      },
    }: PlayerProps): void => {
      getOAuthToken((token: string) => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
          method: 'PUT',
          body: JSON.stringify({ uris: [spotify_uri] }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
      });
    };

    play({
      spotify_uri: uri,
      playerInstance: player,
    });
  };

  const pauseSong = (): void => {
    const pause = ({
      playerInstance: {
        _options: { getOAuthToken },
      },
    }: PlayerProps): void => {
      getOAuthToken((token: string) => {
        fetch('https://api.spotify.com/v1/me/player/pause', {
          method: 'PUT',
          headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      });
    };

    pause({ playerInstance: player });
  };

  const resumeSong = (): void => {
    const resume = ({
      playerInstance: {
        _options: { getOAuthToken },
      },
    }: PlayerProps): void => {
      getOAuthToken((token: string) => {
        fetch('https://api.spotify.com/v1/me/player/play', {
          method: 'PUT',
          headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      });
    };

    resume({ playerInstance: player });
  };

  const seekPosition = (position_ms: number): void => {
    const seek = ({
      playerInstance: {
        _options: { getOAuthToken },
      },
    }: PlayerProps): void => {
      getOAuthToken((token: string) => {
        fetch(`https://api.spotify.com/v1/me/player/seek?position_ms=${position_ms}`, {
          method: 'PUT',
          headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      });
    };

    seek({ playerInstance: player });
  };

  const setVolume = (percent: number): void => {
    const volume = ({
      playerInstance: {
        _options: { getOAuthToken },
      },
    }: PlayerProps): void => {
      getOAuthToken((token: string) => {
        fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${percent}`, {
          method: 'PUT',
          headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      });
    };

    volume({ playerInstance: player });
  };

  return { playSong, stopSong, pauseSong, resumeSong, seekPosition, setVolume };
};
