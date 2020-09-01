import * as React from 'react';
import { Announcements } from './Announcements';

export default {
  title: 'Announcements',
  component: Announcements,
};

export const regular = (): React.ReactNode => <Announcements />;
