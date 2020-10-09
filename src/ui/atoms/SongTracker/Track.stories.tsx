import * as React from 'react';
import { SongTracker } from './SongTracker';

export default {
  title: 'SongTracker',
  component: SongTracker,
};

export const regular = (): React.ReactNode => <SongTracker max={191000} />;
