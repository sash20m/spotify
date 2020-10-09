/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'estafette-intl';
import { useRequest } from 'estafette';
import { playlists } from 'libs/http/api/playlist/playlist';
import { Playlists } from 'libs/http/api/playlist/playlist.types';

import { Layout } from 'ui/organisms';
import { LoaderInline } from 'ui/atoms';

import './PlaylistsPage.scss';

export const PlaylistsPage = (): React.ReactElement => {
  const { request, data, loading } = useRequest<Playlists>();
  const history = useHistory();
  const { t } = useIntl();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      request(playlists.get());
    };

    getData();
  }, []);

  const goToPlaylist = (id: string): void => {
    history.push(`/playlist/${id}`);
  };

  return (
    <Layout>
      <div className="playlists">
        <p className="title">{t('playlists')}</p>
        <div className="playlists__container">
          {loading ? (
            <LoaderInline />
          ) : (
            <>
              {data.playlists?.items.map((playlist) => (
                <div key={playlist.id} className="playlist" onClick={() => goToPlaylist(playlist.id)}>
                  <div className="playlist__content">
                    <img src={playlist.images[0].url} className="playlist__content__cover shadow" />
                    <p className="playlist__content__name">{playlist.name}</p>
                    <p
                      className="playlist__content__description"
                      dangerouslySetInnerHTML={{ __html: playlist.description }}
                    ></p>
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
