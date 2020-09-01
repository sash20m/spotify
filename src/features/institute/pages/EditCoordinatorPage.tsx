import * as React from 'react';
import { EditAccount } from 'ui/organisms';

import { InstituteLayout } from '../organisms';

export const EditCoordinatorPage: React.FC = () => {
  return (
    <InstituteLayout breadcrumbs={[{ label: 'Editare coordonatorului' }]}>
      <h1>Editare coordonatorului</h1>

      <EditAccount />
    </InstituteLayout>
  );
};
