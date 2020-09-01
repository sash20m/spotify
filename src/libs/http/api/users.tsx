import env from '@beam-australia/react-env';
import { AxiosResponse, Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export interface Register {
  refresh: string;
  access: string;
}

const authorization = (action = '', { cancelToken, ...option }: { [key: string]: any }): Promise<any> =>
  axios.post<Register>(
    `${env('SSO_URL')}authorization/token/${action ? `${action}/` : ''}`,
    {
      service_token: env('SERVICE_TOKEN'),
      ...option,
    },
    { cancelToken },
  );

export const users = {
  register: {
    action: (option = {}): Promise<AxiosResponse<Register>> =>
      axios.post<Register>(`users/register`, option, {
        cancelToken: new cancelToken((c: Canceler) => (users.register.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  verify: {
    action: (option = {}) =>
      authorization('verify', { ...option, cancelToken: new cancelToken((c: Canceler) => (users.verify.cancel = c)) }),
    cancel: {} as Canceler,
  },

  refresh: {
    action: (option = {}) =>
      authorization('refresh', {
        ...option,
        cancelToken: new cancelToken((c: Canceler) => (users.refresh.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  logout: {
    action: (option = {}) =>
      authorization('logout', { ...option, cancelToken: new cancelToken((c: Canceler) => (users.logout.cancel = c)) }),
    cancel: {} as Canceler,
  },

  login: {
    action: (option = {}) =>
      authorization('', { ...option, cancelToken: new cancelToken((c: Canceler) => (users.login.cancel = c)) }),
    cancel: {} as Canceler,
  },
};
