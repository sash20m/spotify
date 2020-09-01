import * as React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const unchecked = (): React.ReactElement => <Switch onChange={(): null => null} checked={false} />;

export const checked = (): React.ReactElement => <Switch onChange={(): null => null} checked={true} />;

export const switcher = (): React.ReactElement => {
  const [checked, setChecked] = React.useState(false);

  return <Switch onChange={setChecked} checked={checked} />;
};
