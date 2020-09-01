import * as React from 'react';
import { save } from 'react-cookies';
import { useHistory, Link } from 'estafette-router';
import { useRequest } from 'estafette';
import { useIntl } from 'estafette-intl';
import { useStateHandlers } from 'hooks';
import { axiosHeadersUpdater } from 'libs/http/axios';
import { users } from 'libs/http/api';
import { Input, Button } from 'ui/atoms';

import { Checkbox } from 'features/public/atoms';

import './Login.scss';

interface UsersLogin {
  refresh: string;
  access: string;
}

export const Login: React.FC = () => {
  const { push } = useHistory();
  const [state, setState] = useStateHandlers({
    email: '',
    password: '',
    remember: false,
  });
  const { t } = useIntl();
  const { request, data } = useRequest<UsersLogin>({ data: {} });

  const handleSubmit = (): Promise<UsersLogin> =>
    request(users.login.action({ username: state.email, password: state.password }));

  React.useEffect(() => {
    if (data.access) {
      save('jwt-token', data.access, { path: '/' });
      save('jwt-refresh-token', data.refresh, { path: '/' });
      axiosHeadersUpdater();

      push('SessionsPage', { query: { logged: true } });
    }
  }, [data]);

  return (
    <div className="loginBlock">
      <h3>{t('loginDetails')}</h3>
      <Input
        value={state.email}
        onChange={(value: string): void => setState({ email: value })}
        placeholder={t('email')}
      />
      <Input
        value={state.password}
        onChange={(value: string): void => setState({ password: value })}
        type="password"
        placeholder={t('password')}
      />

      <div className="loginOptions">
        <Checkbox
          value={state.remember}
          onChange={(value: boolean): void => setState({ remember: value })}
          title={t('keepLogged')}
        />
        <Link route="RecoveryPage">{t('forgotPassword')}</Link>
      </div>

      <Button type="primary" onClick={handleSubmit}>
        {t('login')}
      </Button>
    </div>
  );
};
