import * as React from 'react';
import { Breadcrumbs } from 'ui/atoms';
import { EditAccount, Layout } from 'ui/organisms';

import './EditPersonalAccountPage.scss';

export const EditPersonalAccountPage: React.FC = () => {
  return (
    <Layout className="zh-edit-account-page" title="Cont personal">
      <Breadcrumbs data={[{ label: 'Cont personal' }, { label: 'Editarea profilului' }]} />

      <h1>Editare profil</h1>

      <EditAccount />
    </Layout>
  );
};
