import * as React from 'react';
import { useRouterHelpers } from 'estafette-router';
import { Layout } from 'ui/organisms';
import { Breadcrumbs, Button, Tabs, Icon } from 'ui/atoms';
import { Breadcrumb } from 'ui/atoms/Breadcrumbs/Breadcrumbs';

export const SessionsLayout: React.FC<{ showTabs?: boolean; breadcrumbs: Breadcrumb[] }> = ({
  showTabs = true,
  children,
  breadcrumbs,
}) => {
  const { isRouteActive } = useRouterHelpers();

  const tabsData = [
    {
      route: 'PlannedSessionsPage',
      label: 'Sesiuni planificate',
      active: isRouteActive('PlannedSessionsPage'),
    },
    {
      route: 'CurrentSessionsPage',
      label: 'Sesiuni curente',
      active: isRouteActive('CurrentSessionsPage'),
    },
    {
      route: 'ClosedSessionsPage',
      label: 'Sesiuni încheiate',
      active: isRouteActive('ClosedSessionsPage'),
    },
    {
      route: 'SessionApplicationsPage',
      label: 'Cereri de sesiune',
      active: isRouteActive('SessionApplicationsPage'),
    },
  ];

  return (
    <Layout
      title={'Sesiuni'}
      rightSide={
        <Button type="invert" prefix={<Icon type="plus" />}>
          Adaugă sesiune
        </Button>
      }
    >
      <Breadcrumbs data={[{ label: 'Sesiuni' }, ...breadcrumbs]} className="mb-20" />

      {showTabs && <Tabs data={tabsData} className="mb-10" />}

      {children}
    </Layout>
  );
};
