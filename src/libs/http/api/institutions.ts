import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const institutions = {
  get: {
    action: (params = {}) =>
      axios.get(`institutions`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (institutions.get.cancel = c)),
      }),
    cancel: {} as Canceler,
  },
};
