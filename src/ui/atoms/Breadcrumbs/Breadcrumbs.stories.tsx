import * as React from 'react';
import { CreateRouter } from 'estafette-router';
import { Switch } from 'ui/atoms';
import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

export const withOutLinks = (): React.ReactElement => (
  <Breadcrumbs data={[{ label: 'Cont personal' }, { label: 'Editarea profilului' }]} />
);

export const withDisabledOne = (): React.ReactElement => (
  <Breadcrumbs data={[{ label: 'Cont personal' }, { label: 'Editarea profilului', disabled: true }]} />
);

export const withLoading = (): React.ReactElement => {
  const [loading, setLoading] = React.useState(true);

  const onLoadingToggle = (): void => setLoading((s) => !s);

  return (
    <>
      <Breadcrumbs data={[{ label: 'Cont personal' }, { label: 'Editarea profilului', loading }]} />

      <div>
        <br />
        Switch Loading: <Switch checked={loading} onChange={onLoadingToggle} />
      </div>
    </>
  );
};

export const withOneLink = (): React.ReactElement => {
  const [loading, setLoading] = React.useState(false);

  const onLoadingToggle = (): void => setLoading((s) => !s);

  return (
    <CreateRouter
      routes={[
        {
          name: 'SignUpPage',
          path: '',
          component: (): React.ReactNode => (
            <>
              <Breadcrumbs
                data={[
                  { label: 'Cont personal', route: 'SignUpPage' },
                  { label: 'Editarea profilului', loading },
                ]}
              />

              <div>
                <br />
                Switch Loading: <Switch checked={loading} onChange={onLoadingToggle} />
              </div>
            </>
          ),
        },
      ]}
    />
  );
};
