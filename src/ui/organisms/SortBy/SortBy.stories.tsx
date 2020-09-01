import * as React from 'react';
import { SortBy } from './SortBy';

export default {
  title: 'SortBy',
  component: SortBy,
};

export const regular = (): React.ReactNode => <SortBy value="" onChange={(): null => null} />;
