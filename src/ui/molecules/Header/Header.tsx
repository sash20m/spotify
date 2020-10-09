import React from 'react';
import { useIntl } from 'estafette-intl';

import { LoaderInline } from 'ui/atoms';

import './Header.scss';

interface Props {
  name: string;
  description: string;
  owner: {
    display_name: string;
  };
  tracks: {
    total: number;
  };
  images?: {
    url: string;
  }[];
  loading: boolean;
}

export const Header: React.FC<Props> = ({ name, description, owner, tracks, images, loading }) => {
  const { t } = useIntl();
  return (
    <div className="header">
      <div className="header__cover-content">
        <img className="header__cover-content cover" src={images ? images[0].url : ''} />
      </div>
      <div className="header__info">
        {loading ? (
          <LoaderInline className="loader" />
        ) : (
          <>
            <p className="header__info__category">PLAYLIST</p>
            <p className="header__info__title">{name}</p>
            <p className="header__info__artists">{description}</p>
            <p className="header__info__duration">{`${owner?.display_name} • ${tracks?.total} ${t('songs')}`}</p>
          </>
        )}
      </div>
    </div>
  );
};
