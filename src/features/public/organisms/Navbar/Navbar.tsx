import * as React from 'react';
import { useIntl } from 'estafette-intl';
import { Link } from 'estafette-router';
import { Button, Select } from 'ui/atoms';

import './Navbar.scss';

export const Navbar: React.FC = () => {
  const { t, locale, setLocale } = useIntl();
  const handleChange = (lang: string): void => {
    setLocale(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div className="nav">
      <Link route="SessionsPage">
        <div className="logo" />
      </Link>
      <div className="switchLang">
        <Select
          options={[
            { value: 'en', title: 'Eng' },
            { value: 'ro', title: 'Rom' },
            { value: 'ru', title: 'Rus' },
          ]}
          selected={locale}
          onChange={handleChange}
        />
      </div>
      <div className="group">
        <Link route="SignInPage">
          <Button>{t('signin')}</Button>
        </Link>
        <Link route="SignUpPage">
          <Button type="primary">{t('signup')}</Button>
        </Link>
      </div>
    </div>
  );
};
