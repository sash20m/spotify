import * as React from 'react';
import { Player } from './Player';

export default {
  title: 'Player',
  component: Player,
};

export const regular = (): React.ReactNode => <Player />;
