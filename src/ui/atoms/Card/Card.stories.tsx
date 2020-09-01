import * as React from 'react';
import { Button, ButtonGroup, Table } from 'ui/atoms';
import { Time } from 'ui/atoms/Time/Time';
import { Column } from 'ui/atoms/Table/Table';
import { Card, CardHeader, CardFooter, CardAlert } from './Card';

export default {
  title: 'Card',
  component: Card,
};

const data = [
  { title: 'Test', desc: 'Desc', created: 'Today' },
  { title: 'Test', desc: 'Desc', created: 'Today' },
  { title: 'Test', desc: 'Desc', created: 'Today' },
  { title: 'Test', desc: 'Desc', created: 'Today' },
];

const columns: Column<{ title: string; desc: string; created: string }>[] = [
  {
    title: 'Title',
    dataIndex: 'title',
    onFilter: console.log,
  },
  {
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    title: 'Created',
    render: ({ created }): React.ReactNode => <Time date={created} noParse />,
  },
  {
    title: 'Action',
    action: true,
    render: (): React.ReactNode => <Button>Example</Button>,
  },
];

export const regular = (): React.ReactElement => (
  <Card>
    <CardHeader
      title="Title"
      leftSide={
        <ButtonGroup>
          <Button>Prev</Button>
          <Button>Next</Button>
        </ButtonGroup>
      }
      rightSide={
        <>
          <Button>Prev</Button>
          <Button>Next</Button>
        </>
      }
    />

    <Table page={1} data={data} columns={columns} />

    <CardFooter
      onRefresh={(): null => null}
      current={10}
      total={32}
      rightSide={
        <>
          <Button>Prev</Button>
          <Button>Next</Button>
        </>
      }
    />
  </Card>
);

export const alertAtBottom = (): React.ReactElement => (
  <Card>
    <CardHeader
      title="Title"
      leftSide={
        <ButtonGroup>
          <Button>Prev</Button>
          <Button>Next</Button>
        </ButtonGroup>
      }
      rightSide={
        <>
          <Button>Prev</Button>
          <Button>Next</Button>
        </>
      }
    />

    <Table page={1} data={data} columns={columns} />

    <CardFooter
      onRefresh={(): null => null}
      current={10}
      total={32}
      rightSide={
        <>
          <Button>Prev</Button>
          <Button>Next</Button>
        </>
      }
    />

    <CardAlert label="Ați găsit problemă lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?" />
  </Card>
);

export const alertBelowHeader = (): React.ReactElement => (
  <Card>
    <CardHeader
      title="Title"
      leftSide={
        <ButtonGroup>
          <Button>Prev</Button>
          <Button>Next</Button>
        </ButtonGroup>
      }
      rightSide={
        <>
          <Button>Prev</Button>
          <Button>Next</Button>
        </>
      }
    />

    <CardAlert label="Ați găsit problemă lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?" />

    <Table page={1} data={data} columns={columns} />

    <CardFooter
      onRefresh={(): null => null}
      current={10}
      total={32}
      rightSide={
        <>
          <Button>Prev</Button>
          <Button>Next</Button>
        </>
      }
    />
  </Card>
);
