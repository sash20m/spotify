import * as React from 'react';
import { useStateHandlers } from 'hooks';
import { Card, CardHeader, CardFooter, Button, Table, Time, Input, Icon } from 'ui/atoms';
import { Column } from 'ui/atoms/Table/Table';
import { SortBy } from 'ui/organisms';

import { InstituteLayout } from '../organisms';

interface Data {
  date: string;
  institute: string;
  session: string;
  course: string;
}

const data: Data[] = [
  {
    date: '22 iunie 2020, 19:00',
    institute: 'Chșinău lorem ipsum dolor',
    session: 'Misiologie',
    course: 'Facultatea de engleză - Facultatea de Bază',
  },
];

const columns: Column<Data>[] = [
  {
    title: 'Data și ora',
    render: ({ date }): React.ReactNode => <Time date={date} noParse />,
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
];

interface SecondData {
  date: string;
  location: string;
  institute: string;
  session: string;
  course: string;
  students: string;
}

const SecondData: SecondData[] = [
  {
    date: '22 iunie 2020, 19:00',
    location: 'Chșinău, Moldova',
    institute: 'ASEM',
    session: 'Consiliere spirituala',
    course: 'Facultatea de engleză - Facultatea de Bază',
    students: '21',
  },
];

const secondColumns: Column<SecondData>[] = [
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

export const SessionsinstitutePage: React.FC = () => {
  const [filter, setFilter] = useStateHandlers({
    searchSessions: '',
    sortSessions: '',
    sortPlannedSessions: '',
    searchPlannedSessions: '',
    sortPendingSessions: '',
    searchPendingSessions: '',
  });

  const onChangeSearch = (searchSessions: string): void => setFilter({ searchSessions });
  const onChangeSort = (sortSessions: string): void => setFilter({ sortSessions });
  const onChangePlannedSort = (sortPlannedSessions: string): void => setFilter({ sortPlannedSessions });
  const onChangeSearchPlanned = (searchPlannedSessions: string): void => setFilter({ searchPlannedSessions });
  const onChangePendingSort = (sortPendingSessions: string): void => setFilter({ sortPendingSessions });
  const onChangeSearchPending = (searchPendingSessions: string): void => setFilter({ searchPendingSessions });

  return (
    <InstituteLayout breadcrumbs={[{ label: 'Sesiuni curente' }]}>
      <Card>
        <CardHeader
          title="Invitație în așteptare (1)"
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

      <Card>
        <CardHeader
          title="Sesiuni planificate (1)"
          leftSide={
            <Input
              prefix={<Icon type="search" />}
              placeholder="Căută după cuvânt cheie"
              value={filter.searchPlannedSessions}
              onChange={onChangeSearchPlanned}
              width={240}
              styleType="grey"
            />
          }
          rightSide={<SortBy value={filter.sortPlannedSessions} onChange={onChangePlannedSort} />}
        />

        <Table page={1} data={SecondData} columns={secondColumns} />

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

      <Card>
        <CardHeader
          title="Sesiuni neincheiate (1)"
          leftSide={
            <Input
              prefix={<Icon type="search" />}
              placeholder="Căută după cuvânt cheie"
              value={filter.searchPendingSessions}
              onChange={onChangeSearchPending}
              width={240}
              styleType="grey"
            />
          }
          rightSide={<SortBy value={filter.sortPendingSessions} onChange={onChangePendingSort} />}
        />

        <Table page={1} data={SecondData} columns={secondColumns} />

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