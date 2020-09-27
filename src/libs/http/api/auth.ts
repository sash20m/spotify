import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';
import { stringify } from 'qs';
import env from '@beam-australia/react-env';

const data = stringify({
  grant_type: 'client_credentials',
});

const url = env('ACCESS_URL');

export const auth = {
  getToken: <T>() =>
    axios.post<T>(url, data, {
      headers: {
        Authorization: `Basic ${env('SECRET_KEY')}`,
      },
      cancelToken: new cancelToken((c: Canceler) => (auth.cancel = c)),
    }),
  cancel: {} as Canceler,
};
