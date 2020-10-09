/* eslint-disable no-use-before-define */
import * as React from 'react';
import { msToTime } from 'libs/time';
import { ReactComponent as PlayIcon } from './icons/play.svg';
import { ReactComponent as PauseIcon } from './icons/pause.svg';

import './Song.scss';
import { playerFunctionality } from 'libs/playerFunctionality';
import { CurrentSongContext, IsPlayingContext, NeighborSongsContext } from 'contexts';
import { CurrentSongType } from 'contexts/CurrentSongContext';

interface Props {
  item: CurrentSongType;
  count: number;
  nextItem: CurrentSongType;
  previousItem: CurrentSongType;
}

export const Song: React.FC<Props> = ({ item, count, nextItem, previousItem }) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [playing, setPlaying] = React.useState<boolean>(false);

  const { setNeighborSongs } = React.useContext(NeighborSongsContext);
  const { isPlayingSong, setIsPlayingSong } = React.useContext(IsPlayingContext);
  const { currentSong, setCurrentSong } = React.useContext(CurrentSongContext);

  React.useEffect(() => {
    if (isPlayingSong.id === item.track.id) {
      setPlaying(true);
    } else setPlaying(false);
  }, [isPlayingSong]);

  React.useEffect(() => {
    if (currentSong?.track?.id === item.track.id) {
      setNeighborSongs({ previousSong: previousItem, nextSong: nextItem });
    }
  }, [currentSong]);

  React.useEffect(() => {
    if (isPlayingSong.id === item.track.id && isPlayingSong.finished) {
      playNextSong();
    }
  }, [isPlayingSong]);

  React.useEffect(() => {
    if (isPlayingSong.id === item.track.id) {
      if (isPlayingSong.status === false) {
        setPlaying(false);
      } else {
        setPlaying(true);
      }
    }
  }, [isPlayingSong]);

  React.useEffect(() => {
    if (currentSong?.track?.id !== item.track.id) {
      setPlaying(false);
    }
  }, [currentSong]);

  const time = React.useMemo(() => msToTime(item.track.duration_ms).string, [item]);

  const artists = React.useMemo(() => {
    let artists = '';
    item.track?.artists.map((artist) => (artists = artists ? `${artists}, ${artist.name}` : `${artist.name}`));
    return artists;
  }, [item]);

  const playSong = (uri: string): void => {
    playerFunctionality().playSong(uri);
    setCurrentSong(item);
    setIsPlayingSong({ id: item.track.id, status: true });
  };

  const stopSong = (): void => {
    playerFunctionality().stopSong();
    setPlaying(false);
    setIsPlayingSong({ id: item.track.id, status: false });
  };

  const playNextSong = (): void => {
    playerFunctionality().playSong(nextItem.track.uri);
    setCurrentSong(nextItem);
    setIsPlayingSong({ id: nextItem.track.id, status: true });
  };
  const controllerHandler = (state: boolean): void => {
    setHovered(state);
  };

  return (
    <button
      className="song-item"
      onMouseEnter={() => controllerHandler(true)}
      onMouseLeave={() => controllerHandler(false)}
    >
      <div className="song-controller">
        {hovered ? (
          playing ? (
            <PauseIcon className="play-icon" onClick={() => stopSong()} />
          ) : (
            <PlayIcon className="play-icon" onClick={() => playSong(item.track.uri)} />
          )
        ) : (
          <p className="count">{count}</p>
        )}
      </div>
      <div className="song-info">
        <img src={item.track.album.images[0].url} className="song-info__cover" />
        <div className="song-info__info">
          <p className={playing ? 'song-info__info__title--green' : 'song-info__info__title'}>{item.track.name}</p>
          <p className="song-info__info__artist">{artists}</p>
        </div>
      </div>
      <p className="album">{item.track.album.name}</p>
      <p className="song-length">{time}</p>
    </button>
  );
};
