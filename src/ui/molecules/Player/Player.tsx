/* eslint-disable no-undef */
import * as React from 'react';
import { CurrentSongContext, IsPlayingContext, NeighborSongsContext } from 'contexts';
import { Item } from 'libs/http/api/playlist/playlist.types';
import { playerFunctionality } from 'libs/playerFunctionality';

import { SongTracker, VolumeController } from 'ui/atoms';
import { ReactComponent as PlayButton } from './icons/video.svg';
import { ReactComponent as PauseButton } from './icons/pause.svg';
import { ReactComponent as NeighborSong } from './icons/next.svg';
import { ReactComponent as VolumeIcon } from './icons/volume.svg';

import './Player.scss';

interface NeighborsItems {
  previousItem: Item;
  nextItem: Item;
}

const initialState = {
  track: {
    album: {
      images: [
        {
          height: 100,
          url: '',
        },
      ],
      name: '',
    },
    name: '',
    artists: [
      {
        name: '',
      },
    ],
    duration_ms: 1,
    id: '',
    uri: '',
  },
};

export const Player: React.FC = () => {
  const [songData, setSongData] = React.useState<Item>(initialState);
  const [neighborItems, setNeigborsItems] = React.useState<NeighborsItems>({
    previousItem: initialState,
    nextItem: initialState,
  });

  const { isPlayingSong, setIsPlayingSong } = React.useContext(IsPlayingContext);
  const { currentSong, setCurrentSong } = React.useContext(CurrentSongContext);
  const { neighborSongs } = React.useContext(NeighborSongsContext);

  React.useEffect(() => {
    const getCurrentSong = (): void => {
      const storage = localStorage.getItem('currentSong');
      if (storage) {
        const data = JSON.parse(storage);
        setCurrentSong(data);

        setIsPlayingSong((prevState: any) => {
          return { ...prevState, id: data.track.id };
        });
      }
    };

    getCurrentSong();
  }, []);

  React.useEffect(() => {
    setSongData(currentSong);
    if (currentSong?.added_at) {
      localStorage.setItem('currentSong', JSON.stringify(currentSong));
    }
  }, [currentSong]);

  const artists = React.useMemo(() => {
    let artists = '';
    songData?.track?.artists.map((artist) => (artists = artists ? `${artists}, ${artist.name}` : `${artist.name}`));
    return artists;
  }, [songData]);

  const onChangePlay = async (status: string): Promise<void> => {
    if (status === 'pause') {
      playerFunctionality().stopSong();
      setIsPlayingSong({ id: songData.track.id, status: false });
    } else {
      playerFunctionality().resumeSong();
      setIsPlayingSong((prevState: any) => {
        return { ...prevState, id: songData.track.id, status: true };
      });
    }
  };

  React.useEffect(() => {
    setNeigborsItems({
      nextItem: neighborSongs.nextSong,
      previousItem: neighborSongs.previousSong,
    });
  }, [neighborSongs]);

  const nextSong = (): void => {
    playerFunctionality().playSong(neighborSongs.nextSong.track.uri);
    setCurrentSong(neighborSongs.nextSong);
    setIsPlayingSong({ id: neighborSongs.nextSong.track.id, status: true });
  };

  const previousSong = (): void => {
    playerFunctionality().playSong(neighborSongs.previousSong.track.uri);
    setCurrentSong(neighborSongs.previousSong);
    setIsPlayingSong({ id: neighborSongs.previousSong.track.id, status: true });
  };

  return (
    <div className="player">
      {songData?.track && (
        <>
          <div className="player__current-song">
            <img src={songData.track.album.images[0].url} alt="Album Cover" className="song-cover shadow" />
            <div className="song-info">
              <p className="song-info__name">{songData.track.name}</p>
              <p className="song-info__artist">{artists}</p>
            </div>
          </div>
          <div className="player__player-functionality">
            <div className="controller">
              <NeighborSong
                className={`controller--previous${neighborItems.previousItem ? '' : '--disabled'}`}
                onClick={previousSong}
              />
              {isPlayingSong.status ? (
                <PauseButton className="controller--play" onClick={() => onChangePlay('pause')} />
              ) : (
                <PlayButton className="controller--play" onClick={() => onChangePlay('play')} />
              )}
              <NeighborSong
                className={`controller--next${neighborItems.nextItem ? '' : '--disabled'}`}
                onClick={nextSong}
              />
            </div>
            <div className="progress-bar">
              <SongTracker max={songData.track.duration_ms} />
            </div>
          </div>
          <div className="player__volume">
            <VolumeIcon className="player__volume__icon" />
            <VolumeController />
          </div>
        </>
      )}
    </div>
  );
};
