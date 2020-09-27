import React from 'react';
import { render } from 'react-dom';
import { register as registerServiceWorker } from 'libs/serviceWorker';
import { routes } from 'routes';
import CreateRouter from './libs/CreateRouter';
import { getToken } from 'libs/http/getToken';

import 'styles/index.scss';

getToken();

render(
  <React.StrictMode>
    <CreateRouter routes={routes} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
