import * as React from 'react';
import { EditAccount } from 'ui/organisms';

import { InstituteLayout } from '../organisms';

export const StudentManagementPage: React.FC = () => {
  return (
    <InstituteLayout breadcrumbs={[{ label: 'Editarea profilului' }]}>
      <h1>Editare profilului</h1>

      <EditAccount />
    </InstituteLayout>
  );
};
