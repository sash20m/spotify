import * as React from 'react';
import { Roadmap } from 'ui/organisms';

export default {
  title: 'Roadmap',
  component: Roadmap,
};

export const regular = (): React.ReactNode => (
  <Roadmap data={[{ target: 'Iunie 2020', children: <span>hello world</span> }]} />
);
