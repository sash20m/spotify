import * as React from 'react';
import { ReactComponent as PlayButton } from './icons/video.svg';
import { ReactComponent as NextSong } from './icons/next.svg';
// import { ReactComponent as PauseButton } from './icons/pause.svg';
import { ReactComponent as VolumeIcon } from './icons/volume.svg';
import { SongTracker, VolumeController } from 'ui/atoms';

import './Player.scss';

export const Player: React.FC = () => {
  return (
    <div className="player">
      <div className="player__current-song">
        <img src="album-cover.jpg" alt="Album Cover" className="song-cover shadow" />
        <div className="song-info">
          <p className="song-info__name">Memories</p>
          <p className="song-info__artist">Shawn Mendes</p>
        </div>
      </div>
      <div className="player__player-functionality">
        <div className="controller">
          <NextSong className="controller--previous" />
          <PlayButton className="controller--play" />
          <NextSong className="controller--next" />
        </div>
        <div className="progress-bar">
          <p>start</p>
          <SongTracker />
          <p>end</p>
        </div>
      </div>
      <div className="player__volume">
        <VolumeIcon className="player__volume__icon" />
        <VolumeController />
      </div>
    </div>
  );
};
