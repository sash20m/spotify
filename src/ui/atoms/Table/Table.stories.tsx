import * as React from 'react';
import { Table } from 'ui/atoms';

export default {
  title: 'Table',
  component: Table,
};

const data = [
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
  { title: 'Test', desc: 'Desc', date: 'Today' },
];

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    filters: ['desc', 'asc'],
    onFilter: console.log,
  },
  {
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    title: 'Time',
    dataIndex: 'date',
  },
];

export const regular = (): React.ReactElement => <Table page={1} data={data} columns={columns} />;
