import * as React from 'react';
import { CreateRouter } from 'estafette-router';
import { Layout } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
};

export const regular = (): React.ReactNode => (
  <CreateRouter
    routes={[
      {
        name: 'SignUpPage',
        path: '',
        component: (): React.ReactNode => <Layout title="Sesiuni anterioare">123</Layout>,
      },
    ]}
  />
);
