/* eslint-disable no-use-before-define */
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'estafette';
import { IsPlayingContext } from 'contexts';
import { playlist } from 'libs/http/api/playlist/playlist';
import { Playlist } from 'libs/http/api/playlist/playlist.types';
import { playerFunctionality } from 'libs/playerFunctionality';

import { Header } from 'ui/molecules';
import { Layout, SongList } from 'ui/organisms';
import { ReactComponent as PlayIcon } from './icons/play-button.svg';
import { ReactComponent as PauseIcon } from './icons/pause.svg';

import './PlaylistPage.scss';

export const PlaylistPage = (): React.ReactElement => {
  const { isPlayingSong, setIsPlayingSong } = useContext(IsPlayingContext);
  const { request, data, loading } = useRequest<Playlist>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      request(playlist.get(params.id));
    };

    getData();
  }, []);

  const togglePlay = (status: string): void => {
    if (status === 'pause') {
      playerFunctionality().stopSong();
      setIsPlayingSong((prevState: any) => {
        return { ...prevState, status: false };
      });
    } else {
      playerFunctionality().resumeSong();
      setIsPlayingSong((prevState: any) => {
        return { ...prevState, status: true };
      });
    }
  };

  return (
    <Layout>
      <div className="playlist">
        <Header
          name={data.name}
          description={data.description}
          owner={data.owner}
          tracks={data.tracks}
          images={data.images}
          loading={loading}
        />

        <div className="song-list">
          <div className="song-list__header-bg"></div>
          <div className="song-list__content">
            <div className="song-list__content__playBtn">
              {isPlayingSong.status ? (
                <PauseIcon className="play-btn" onClick={() => togglePlay('pause')} />
              ) : (
                <PlayIcon className="play-btn" onClick={() => togglePlay('play')} />
              )}
            </div>
            {<SongList tracks={data.tracks} loading={loading} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};
