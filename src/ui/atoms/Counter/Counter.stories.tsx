import * as React from 'react';
import { Counter } from './Counter';

export default {
  title: 'Counter',
  component: Counter,
};

export const regular = (): React.ReactElement => <Counter total={100} />;
