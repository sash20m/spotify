import * as React from 'react';
import { Layout } from 'ui/organisms';
import { Breadcrumbs } from 'ui/atoms';
import { Breadcrumb } from 'ui/atoms/Breadcrumbs/Breadcrumbs';

export const EventLayout: React.FC<{ breadcrumbs: Breadcrumb[] }> = ({ children, breadcrumbs }) => {
  return (
    <Layout title={'Calendar de evenimente'}>
      <Breadcrumbs data={[{ label: 'Calendar de evenimente' }, ...breadcrumbs]} className="mb-20" />

      {children}
    </Layout>
  );
};
