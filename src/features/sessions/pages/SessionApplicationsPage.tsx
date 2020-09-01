import * as React from 'react';
import { useStateHandlers } from 'hooks';
import { SortBy } from 'ui/organisms';
import { Card, CardHeader, CardFooter, Input, Icon, Button, Table, Time } from 'ui/atoms';
import { Column } from 'ui/atoms/Table/Table';

import { SessionsLayout } from '../organisms';

interface Data {
  id: number;
  period: string;
  location: string;
  institute: string;
  session: string;
  course: string;
  students: number;
}

const data: Data[] = [
  {
    id: 1,
    period: '2 ianuarie 2021 - 11 ianuarie 2021',
    location: 'Chșinău, Moldova',
    institute: 'ASEM',
    session: 'Consiliere spirituala',
    course: 'Facultatea de engleză - Facultatea de Bază',
    students: 23,
  },
];

const columns: Column<Data>[] = [
  {
    title: 'Perioada',
    render: ({ period }): React.ReactNode => <Time date={period} noParse />,
  },
  {
    title: 'Locul',
    dataIndex: 'location',
  },
  {
    title: 'Institutul',
    dataIndex: 'institute',
  },
  {
    title: 'Sesiunea',
    dataIndex: 'session',
  },
  {
    title: 'Cursul',
    dataIndex: 'course',
  },
  {
    title: 'Nr. de studenți înregistrați',
    dataIndex: 'students',
  },
  {
    title: 'Acțiuni',
    action: true,
    render: () => (
      <div className="flex flex-margin-between">
        <Button prefix={<Icon type="cancel" />}>Respinge</Button>

        <Button type="primary" prefix={<Icon type="check" />}>
          Acceaptă
        </Button>
      </div>
    ),
  },
];

export const SessionApplicationsPage: React.FC = () => {
  const [filter, setFilter] = useStateHandlers({
    search: '',
    sort: '',
  });

  const onChangeSearch = (search: string): void => setFilter({ search });
  const onChangeSort = (sort: string): void => setFilter({ sort });

  return (
    <SessionsLayout breadcrumbs={[{ label: 'Cereri de sesiune' }]}>
      <Card>
        <CardHeader
          title="Cereri de sesiune (1)"
          leftSide={
            <Input
              prefix={<Icon type="search" />}
              placeholder="Caută persoană"
              value={filter.search}
              onChange={onChangeSearch}
              width={240}
              styleType="grey"
            />
          }
          rightSide={<SortBy value={filter.sort} onChange={onChangeSort} />}
        />

        <Table size="small" page={1} data={data} columns={columns} />

        <CardFooter
          onRefresh={(): null => null}
          current={1}
          total={2}
          rightSide={
            <>
              <Button disabled>Prev</Button>
              <Button disabled>Next</Button>
            </>
          }
        />
      </Card>
    </SessionsLayout>
  );
};
