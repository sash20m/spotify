import * as React from 'react';
import { Switch } from 'ui/atoms';
import { Loader, LoaderInline } from './Loader';
import { LoaderSpinner } from './LoaderSpinner';

export default {
  title: 'Loader',
  component: Loader,
};

export const loader = (): React.ReactElement => {
  const [loading, setLoading] = React.useState(true);

  const onToggleHandler = (): void => setLoading((s) => !s);

  return (
    <>
      <p>
        Toggle: <Switch checked={loading} onChange={onToggleHandler} />
      </p>

      <Loader loading={loading}>
        <h1>Test</h1>
      </Loader>
    </>
  );
};

export const loaderInline = (): React.ReactElement => <LoaderInline />;

export const loaderSpinnerSimpleSmall = (): React.ReactElement => <LoaderSpinner size="small" />;

export const loaderSpinnerSimple = (): React.ReactElement => <LoaderSpinner />;
