import * as React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'estafette-intl';
import { LanguageContext } from 'contexts';
import { useMenu } from 'hooks';

import { initializeSpotifyPlayer } from 'libs/spotifyWebPlayer';
import { ReactComponent as HomeIcon } from './icons/Home.svg';
import { ReactComponent as PlaylistIcon } from './icons/playlist.svg';

import './Sidebar.scss';

export const Sidebar: React.FC = () => {
  const { language, onChangeLang } = React.useContext(LanguageContext);
  const [token, setToken] = React.useState<string>();
  const [tokenFields, setTokenFields] = React.useState<boolean>(false);
  const menu = useMenu();
  const { t } = useIntl();

  const onChangeLanguage = (lang: string): void => {
    onChangeLang(lang);
  };

  const setTokenValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setToken(event.target.value);
  };

  const openTokenFields = (): void => {
    setTokenFields(true);
  };

  const addToken = (): void => {
    localStorage.setItem('playerToken', JSON.stringify(token));
    setTokenFields(false);
    initializeSpotifyPlayer();
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <div>
        <img src="../logo.png" className="sidebar__logo" alt="logo" />
        <div className="sidebar__menu">
          {menu.map((menuItem) => (
            <Link key={menuItem.label} to={menuItem.route}>
              <p className={`sidebar__menu__item${menuItem.active ? '--active' : ''}`}>
                {menuItem.iconType === 'playlist' ? <PlaylistIcon className="icon" /> : <HomeIcon className="icon" />}
                {t(menuItem.label)}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="language">
          <button
            className={`language__item${language === 'en' ? '--active' : ''}`}
            onClick={() => onChangeLanguage('en')}
          >
            En
          </button>
          <button
            className={`language__item${language === 'ro' ? '--active' : ''}`}
            onClick={() => onChangeLanguage('ro')}
          >
            Ro
          </button>
        </div>
        <div className="set-token">
          <button className="set-token__btn" onClick={() => openTokenFields()}>
            {t('setToken')}
          </button>
        </div>
        {tokenFields && (
          <div className="token-fields">
            <input type="text" value={token} onChange={setTokenValue} />
            <button onClick={addToken}>{t('add')}</button>
          </div>
        )}
      </div>
    </div>
  );
};
