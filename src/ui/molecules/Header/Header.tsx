import React from 'react';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__cover-content">
        <img className="header__cover-content cover" src="album-cover.png" alt="album-cover" />
      </div>
      <div className="header__info">
        <p className="header__info__category">PLAYLIST</p>
        <p className="header__info__title">Daily Mix 1</p>
        <p className="header__info__artists">Lauv, Ariana Grande, Shawn Mendes and more</p>
        <p className="header__info__duration">Spotify • 2 hr 52 min</p>
      </div>
    </div>
  );
};
