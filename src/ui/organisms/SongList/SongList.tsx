import * as React from 'react';
import { useIntl } from 'estafette-intl';
import { Tracks } from 'libs/http/api/playlist/playlist.types';

import { LoaderInline } from 'ui/atoms';
import { Song } from 'ui/molecules';

import './SongList.scss';

interface Props {
  tracks: Tracks;
  loading: boolean;
}

export const SongList: React.FC<Props> = ({ tracks, loading }) => {
  const { t } = useIntl();

  return (
    <div className="list">
      <div className="list__header">
        <p className="list__header__diez">#</p>
        <p className="list__header__title">{t('title')}</p>
        <p className="list__header__album">{t('album')}</p>
        <p className="list__header__time">{t('time')}</p>
      </div>
      {loading ? (
        <LoaderInline />
      ) : (
        <>
          {tracks?.items.map((item, key, neighborsItems) => (
            <Song
              key={item.track.id}
              item={item}
              count={key + 1}
              nextItem={neighborsItems[key + 1]}
              previousItem={neighborsItems[key - 1]}
            />
          ))}
        </>
      )}
    </div>
  );
};
