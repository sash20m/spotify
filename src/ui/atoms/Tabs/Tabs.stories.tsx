import * as React from 'react';
import { CreateRouter } from 'estafette-router';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const data = [
  {
    route: 'SignUpPage',
    label: 'Informație generală',
    active: true,
  },
  {
    label: 'Sesiuni curente',
    disabled: true,
  },
  {
    label: 'Sesiuni anterioare',
    disabled: true,
  },
  {
    label: 'Profesorii',
    disabled: true,
  },
  {
    label: 'Studenții',
    disabled: true,
  },
  {
    label: 'Anunțuri',
    disabled: true,
  },
];

export const regular = (): React.ReactElement => (
  <CreateRouter
    routes={[
      {
        name: 'SignUpPage',
        path: '',
        component: (): React.ReactNode => (
          <>
            <Tabs data={data} /> <h1>sign up page</h1>
          </>
        ),
      },
      {
        name: 'SignInPage',
        path: '/test/signin',
        component: (): React.ReactNode => <></>,
      },
    ]}
  />
);
