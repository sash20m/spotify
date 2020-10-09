import React, { useEffect } from 'react';
import { Layout } from '../../ui/organisms';
import { useRequest } from 'estafette';
import { Playlist } from 'libs/http/api/playlist/playlist.types';
import { playlist } from 'libs/http/api/playlist/playlist';

import { useHistory } from 'react-router-dom';
import { LoaderInline } from 'ui/atoms';

export const HomePage = (): React.ReactElement => {
  const { request: requestDailyMix, data: dailyMix, loading: loadingDailyMix } = useRequest<Playlist>();
  const { request: requestTopHits, data: topHits, loading: loadingTopHits } = useRequest<Playlist>();
  const history = useHistory();

  useEffect(() => {
    const getDayliMix = async (): Promise<void> => {
      const dailyMixID = '37i9dQZF1E35lz662Js0C2';
      requestDailyMix(playlist.get(dailyMixID));
    };

    getDayliMix();
  }, []);

  useEffect(() => {
    const getTopHits = async (): Promise<void> => {
      const topHitsID = '37i9dQZF1DXcBWIGoYBM5M';
      requestTopHits(playlist.get(topHitsID));
    };

    getTopHits();
  }, []);

  const goToPlaylist = (id: string): void => {
    history.push(`/playlist/${id}`);
  };

  return (
    <Layout>
      <div className="playlists">
        <p className="title">Playlists</p>
        <div className="playlists__container">
          {loadingDailyMix || loadingTopHits ? (
            <LoaderInline />
          ) : (
            <>
              {[dailyMix, topHits].map((playlist) => (
                <div key={playlist.id} className="playlist" onClick={() => goToPlaylist(playlist.id)}>
                  <div className="playlist__content">
                    {playlist.images && (
                      <img src={playlist.images[0].url} className="playlist__content__cover shadow" />
                    )}
                    <p className="playlist__content__name">{playlist.name}</p>
                    <p className="playlist__content__description">{playlist.description}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};
