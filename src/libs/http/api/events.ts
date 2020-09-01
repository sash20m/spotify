import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const events = {
  get: {
    action: (params = {}) =>
      axios.get(`events`, { params, cancelToken: new cancelToken((c: Canceler) => (events.get.cancel = c)) }),
    cancel: {} as Canceler,
  },
};
