import * as React from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const regular = (): React.ReactElement => <Pagination total={100} />;
