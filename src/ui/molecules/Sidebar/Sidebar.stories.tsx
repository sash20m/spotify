import * as React from 'react';
import { Sidebar } from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const regular = (): React.ReactNode => <Sidebar />;
