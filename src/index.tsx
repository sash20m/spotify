import React from 'react';
import { render } from 'react-dom';
import { register as registerServiceWorker } from 'libs/serviceWorker';
import { routes } from 'routes';
import CreateRouter from './libs/CreateRouter';
import { getToken } from 'libs/http/getToken';

import { CurrentSongProvider, IsPlayingProvider, NeighborSongsProvider, LanguageProvider } from 'contexts';
import { Player } from 'ui/molecules';
import 'styles/index.scss';

import { CreateIntl } from 'estafette-intl';
import { messages } from 'locales';

getToken();
sessionStorage.removeItem('connected');

render(
  <React.StrictMode>
    <LanguageProvider>
      {(language) => (
        <IsPlayingProvider>
          <NeighborSongsProvider>
            <CurrentSongProvider>
              <CreateIntl defaultLocale={language} messages={messages}>
                <CreateRouter routes={routes} />
                <Player />
              </CreateIntl>
            </CurrentSongProvider>
          </NeighborSongsProvider>
        </IsPlayingProvider>
      )}
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
