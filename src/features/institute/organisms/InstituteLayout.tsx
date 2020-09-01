import * as React from 'react';
import { useRouterHelpers } from 'estafette-router';
import { Layout } from 'ui/organisms';
import { Breadcrumbs, Tabs } from 'ui/atoms';
import { Breadcrumb } from 'ui/atoms/Breadcrumbs/Breadcrumbs';

export const InstituteLayout: React.FC<{ breadcrumbs: Breadcrumb[] }> = ({ children, breadcrumbs }) => {
  const { isRouteActive } = useRouterHelpers();

  const tabsData = [
    {
      route: 'GeneralInstitutePage',
      label: 'Informație generală',
      active: isRouteActive(['GeneralInstitutePage', 'EditCoordinatorPage']),
    },
    {
      route: 'SessionsinstitutePage',
      label: 'Sesiuni curente',
      active: isRouteActive('SessionsinstitutePage'),
    },
    {
      route: 'PrevSessionsinstitutePage',
      label: 'Sesiuni anterioare',
      active: isRouteActive('PrevSessionsinstitutePage'),
    },
    {
      route: 'TeachersInstitutePage',
      label: 'Profesorii',
      active: isRouteActive('TeachersInstitutePage'),
    },
    {
      route: 'StudentsInstitutePage',
      label: 'Studenții',
      active: isRouteActive(['StudentsInstitutePage', 'StudentManagementPage']),
    },
    {
      route: 'AnnouncementsInstitutePage',
      label: 'Anunțuri',
      active: isRouteActive('AnnouncementsInstitutePage'),
    },
  ];

  return (
    <Layout title={'Institute'}>
      <Breadcrumbs data={[{ label: 'Institute' }, ...breadcrumbs]} className="mb-20" />

      <Tabs data={tabsData} className="mb-35" />

      {children}
    </Layout>
  );
};
