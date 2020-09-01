import { useHistory } from 'estafette-router';
import * as React from 'react';
import { Layout, ProfileCard } from 'ui/organisms';

export const PersonalAccountPage: React.FC = () => {
  const { push } = useHistory();

  const onEdit = (): void => push('EditPersonalAccountPage');

  return (
    <Layout title="Cont personal">
      <ProfileCard onEdit={onEdit} />
    </Layout>
  );
};
