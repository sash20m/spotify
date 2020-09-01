import * as React from 'react';
import { useIntl } from 'estafette-intl';
import { Link, useLocation } from 'estafette-router';
import { Content } from 'features/public/atoms';
import { Breadcrumbs } from 'ui/atoms';
import { headerData } from './data';

import './Header.scss';

export const Header: React.FC = () => {
  const { t } = useIntl();
  const location = useLocation();

  // remove it and get it from props
  const header = headerData.filter((route) => route.path === location.pathname)[0];
  const data = [{ route: '/public', label: t('home') }];

  if (location.pathname !== '/public' && header && header.breadcrumb) {
    data.push({ route: location.pathname, label: t(header.breadcrumb) });
  }

  return (
    <header>
      <Content>
        <Breadcrumbs data={data} />
        {header && (
          <div className="header">
            <div>
              {header.title && <div className="title">{t(header.title)}</div>}
              {header.subtitle && <div className="subtitle">{t(header.subtitle)}</div>}
            </div>
            {header.extra && (
              <div className="extra">
                {t(header.extra)}
                {header.extra === 'noAccount' ? <Link route="SignUpPage">{t('register')}</Link> : null}
                {header.extra === 'haveAccount' ? <Link route="SignInPage">{t('haveLogin')}</Link> : null}
              </div>
            )}
          </div>
        )}
      </Content>
    </header>
  );
};
