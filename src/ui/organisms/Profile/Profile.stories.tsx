import * as React from 'react';
import { Profile } from './Profile';

export default {
  title: 'Profile',
  component: Profile,
};

export const regular = (): React.ReactNode => (
  <Profile>
    <div>Click</div>
  </Profile>
);
