import * as React from 'react';
import { useStateHandlers } from 'hooks';
import { SortBy } from 'ui/organisms';
import { Card, CardHeader, CardFooter, Input, Icon, Button } from 'ui/atoms';

import { SessionsLayout, PlannedSessionsTable } from '../organisms';

export const PlannedSessionsPage: React.FC = () => {
  const [filter, setFilter] = useStateHandlers({
    search: '',
    sort: '',
  });

  const onChangeSearch = (search: string): void => setFilter({ search });
  const onChangeSort = (sort: string): void => setFilter({ sort });

  return (
    <SessionsLayout breadcrumbs={[{ label: 'Sesiuni planificate' }]}>
      <Card>
        <CardHeader
          title="Sesiuni planificate (1)"
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

        <PlannedSessionsTable />

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
