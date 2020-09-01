import * as React from 'react';
import { render } from 'react-dom';
import { CreateRouter } from 'estafette-router';
import { CreateIntl } from 'estafette-intl';
import { messages } from 'locales';
import { UserProvider } from 'contexts';
import { routes } from 'routes';
import { register as registerServiceWorker } from 'libs/serviceWorker';
import { history } from 'libs/history';

import 'styles/index.scss';

render(
  <UserProvider>
    <CreateIntl defaultLocale={localStorage.getItem('lang') || 'en'} messages={messages}>
      <CreateRouter routes={routes} history={history} />
    </CreateIntl>
  </UserProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
