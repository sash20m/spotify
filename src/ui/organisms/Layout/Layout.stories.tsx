import * as React from 'react';
import { Layout } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
};

export const regular = (): React.ReactNode => (
  <Layout>
    <p>Story</p>
  </Layout>
);
