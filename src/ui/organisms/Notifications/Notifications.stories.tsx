import * as React from 'react';
import { Notifications } from './Notifications';

export default {
  title: 'Notifications',
  component: Notifications,
};

export const regular = (): React.ReactNode => <Notifications />;
