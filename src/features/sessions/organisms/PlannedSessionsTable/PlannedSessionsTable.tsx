import * as React from 'react';
import { Actions, SendMessage } from 'ui/organisms';
import { Table } from 'ui/atoms';
import { Column } from 'ui/atoms/Table/Table';

import { SelectUser } from '../';

import './PlannedSessionsTable.scss';
import { DateRangePicker } from 'ui/molecules';

interface Data {
  id: number;
  title: string;
  location: string;
  language: string;
  session: string;
  period: string;
  notes: string;
}

const data: Data[] = [
  {
    id: 1,
    title: 'Vladimir Josan',
    location: 'Țara, Oraș',
    language: 'Russian',
    session: 'Misiologie',
    period: '02.01.2021 - 11.01.2021',
    notes: 'O notiță scurtă ca un exemplu de text',
  },
];

export const PlannedSessionsTable: React.FC = () => {
  const columns: Column<Data>[] = [
    {
      title: 'Profesor',
      render: ({ title }) => <SelectUser value={title} />,
      className: 'zh-select-user-cell',
    },
    {
      title: 'Țara, Oraș',
      render: ({ location }) => <b>{location}</b>,
    },
    {
      title: 'Limba',
      render: ({ language }) => <b>{language}</b>,
    },
    {
      title: 'Sesiunea',
      render: ({ session }) => <b>{session}</b>,
    },
    {
      title: 'Perioada',
      render: () => <DateRangePicker />,
      className: 'zh-period-cell',
    },
    {
      title: 'Notițe',
      dataIndex: 'notes',
    },
    {
      title: 'Acțiuni',
      action: true,
      render: () => (
        <div className="flex flex-margin-between">
          <SendMessage />

          <Actions
            onAccept={(): null => null}
            onConfirm={(): null => null}
            onSendToConfirm={(): null => null}
            onCancel={(): null => null}
          />
        </div>
      ),
    },
  ];

  return <Table className="zh-planned-sessions-table" page={1} data={data} columns={columns} />;
};
