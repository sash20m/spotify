import * as React from 'react';
import { useStateHandlers } from 'hooks';
import { SortBy, SendMessage, Actions } from 'ui/organisms';
import { Card, CardHeader, CardFooter, Table, AvatarInline, Input, Icon, Button, Info } from 'ui/atoms';
import { Column } from 'ui/atoms/Table/Table';

import { InstituteLayout } from '../organisms';

interface Data {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  institute: string;
  students: number;
}

const data: Data[] = [
  {
    id: 1,
    full_name: 'John Doe',
    email: 'name.function@gmail.com',
    phone: '+37369123456',
    institute: 'Sunday School Teachers',
    students: 21,
  },
  {
    id: 2,
    full_name: 'Vladimir Josan',
    email: 'iask@gmail.com',
    phone: '+37339485456',
    institute: 'School Teachers',
    students: 21,
  },
];

const columns: Column<Data>[] = [
  {
    title: 'Nume și prenume',
    render: ({ full_name: fullName }): React.ReactNode => <AvatarInline alt={fullName} size="small" />,
  },
  {
    title: 'E-mail',
    render: ({ email }): React.ReactNode => <Info icon={<Icon type="mail-filled" />} label={email} />,
  },
  {
    title: 'Telefon',
    render: ({ phone }): React.ReactNode => <Info icon={<Icon type="phone" />} label={phone} />,
  },
  {
    title: 'Institut',
    dataIndex: 'institute',
  },
  {
    title: 'Nr. de studenți',
    dataIndex: 'students',
  },
  {
    title: 'Acțiuni',
    render: () => (
      <div className="flex flex-margin-between">
        <SendMessage />

        <Actions onEdit={(): null => null} onDelete={(): null => null} onDeleteLabel="Șterge profesor" />
      </div>
    ),
  },
];

export const TeachersInstitutePage: React.FC = () => {
  const [filter, setFilter] = useStateHandlers({
    searchSessions: '',
    sortSessions: '',
  });

  const onChangeSearch = (searchSessions: string): void => setFilter({ searchSessions });
  const onChangeSort = (sortSessions: string): void => setFilter({ sortSessions });

  return (
    <InstituteLayout breadcrumbs={[{ label: 'Profesori' }]}>
      <Card>
        <CardHeader
          title="Profesori (2)"
          leftSide={
            <Input
              prefix={<Icon type="search" />}
              placeholder="Caută persoană"
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
          total={2}
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
