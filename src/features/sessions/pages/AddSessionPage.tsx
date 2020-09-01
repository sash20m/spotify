import * as React from 'react';

import { SessionsLayout } from '../organisms';

export const AddSessionPage: React.FC = () => {
  return (
    <SessionsLayout showTabs={false} breadcrumbs={[{ label: 'Adaugă sesiune' }]}>
      123
    </SessionsLayout>
  );
};
