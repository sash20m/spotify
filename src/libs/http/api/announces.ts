import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const announces = {
  get: {
    action: (params = {}) =>
      axios.get('announces', {
        ...params,
        cancelToken: new cancelToken((c: Canceler) => (announces.get.cancel = c)),
      }),
    cancel: {} as Canceler,
  },
};
