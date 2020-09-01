import * as React from 'react';
import { useHistory } from 'estafette-router';
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
  age: number;
}

const data: Data[] = [
  {
    id: 2,
    full_name: 'Vladimir Josan',
    email: 'iask@gmail.com',
    phone: '+37339485456',
    age: 22,
  },
  {
    id: 1,
    full_name: 'John Doe',
    email: 'name.function@gmail.com',
    phone: '+37369123456',
    age: 23,
  },
];

export const StudentsInstitutePage: React.FC = () => {
  const { push } = useHistory();
  const [filter, setFilter] = useStateHandlers({
    search: '',
    sort: '',
  });

  const onChangeSearch = (search: string): void => setFilter({ search });
  const onChangeSort = (sort: string): void => setFilter({ sort });

  const onManagementStudent = (action = 'add'): void => push('StudentManagementPage', { action });

  const columns: Column<Data>[] = React.useMemo(
    () => [
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
        title: 'Vârsta',
        dataIndex: 'age',
      },
      {
        title: 'Acțiuni',
        render: ({ id }) => (
          <div className="flex flex-margin-between">
            <SendMessage />

            <Actions onEdit={() => onManagementStudent(`${id}`)} onDelete={(): null => null} />
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <InstituteLayout breadcrumbs={[{ label: 'Studenții' }]}>
      <Card>
        <CardHeader
          title="Studenții (2)"
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
          rightSide={
            <>
              <Button prefix={<Icon type="user-add" />} type="invert" onClick={onManagementStudent}>
                Adaugă student
              </Button>

              <SortBy value={filter.sort} onChange={onChangeSort} />
            </>
          }
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
