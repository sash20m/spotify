import $axios from 'axios';
import env from '@beam-australia/react-env';
import { load } from 'react-cookies';

export const axios = $axios.create();

// eslint-disable-next-line import/no-named-as-default-member
export const cancelToken = $axios.CancelToken;

axios.defaults.headers['Accept-Language'] = load('localization') || 'en';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = env('API_URL');

export const axiosHeadersUpdater = (): void => {
  const token = load('jwt-token');

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else if (axios.defaults.headers.common.Authorization) {
    delete axios.defaults.headers.common.Authorization;
  }
};

axiosHeadersUpdater();
