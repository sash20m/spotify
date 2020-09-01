import * as React from 'react';
import { useStateHandlers } from 'hooks';
import { Card, CardHeader, CardFooter, Table, Time, Input, Icon, Button } from 'ui/atoms';
import { Column } from 'ui/atoms/Table/Table';
import { SortBy } from 'ui/organisms';

import { InstituteLayout } from '../organisms';

interface Data {
  date: string;
  location: string;
  institute: string;
  session: string;
  course: string;
  students: string;
}

const data: Data[] = [
  {
    date: '22 iunie 2020, 19:00',
    location: 'Chșinău, Moldova',
    institute: 'ASEM',
    session: 'Consiliere spirituala',
    course: 'Facultatea de engleză - Facultatea de Bază',
    students: '21',
  },
  {
    date: '12 iunie 2020, 19:00',
    location: 'Moldova',
    institute: 'USEM',
    session: 'Consiliere',
    course: 'Facultatea de Bază',
    students: '32',
  },
];

const columns: Column<Data>[] = [
  {
    title: 'Data și ora',
    render: ({ date }): React.ReactNode => <Time date={date} noParse />,
  },
  {
    title: 'Locul',
    render: ({ location }) => <b>{location}</b>,
  },
  {
    title: 'Institutul',
    render: ({ institute }) => <b>{institute}</b>,
  },
  {
    title: 'Sesiunea',
    render: ({ session }) => <b>{session}</b>,
  },
  {
    title: 'Cursul',
    render: ({ course }) => <b>{course}</b>,
  },
  {
    title: 'Nr. de studenți înregistrați',
    render: ({ students }) => <b>{students}</b>,
  },
];

export const PrevSessionsinstitutePage: React.FC = () => {
  const [filter, setFilter] = useStateHandlers({
    searchSessions: '',
    sortSessions: '',
  });

  const onChangeSearch = (searchSessions: string): void => setFilter({ searchSessions });
  const onChangeSort = (sortSessions: string): void => setFilter({ sortSessions });

  return (
    <InstituteLayout breadcrumbs={[{ label: 'Sesiuni anterioare' }]}>
      <Card>
        <CardHeader
          title="Sesiuni anterioare (2)"
          leftSide={
            <Input
              prefix={<Icon type="search" />}
              placeholder="Căută după cuvânt cheie"
              value={filter.searchSessions}
              onChange={onChangeSearch}
              width={240}
              styleType="grey"
            />
          }
          rightSide={<SortBy value={filter.sortSessions} onChange={onChangeSort} />}
        />

        <Table page={1} data={data} columns={columns} />

        <CardFooter
          onRefresh={(): null => null}
          current={1}
          currentLabel="sesiune"
          rightSide={
            <>
              <Button disabled>Prev</Button>
              <Button disabled>Next</Button>
            </>
          }
        />
      </Card>
    </InstituteLayout>
  );
};
