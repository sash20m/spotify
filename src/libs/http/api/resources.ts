import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const resources = {
  get: {
    action: (params = {}) =>
      axios.get(`resources`, { params, cancelToken: new cancelToken((c: Canceler) => (resources.get.cancel = c)) }),
    cancel: {} as Canceler,
  },

  getTypes: {
    action: (params = {}) =>
      axios.get(`resource-types`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (resources.getTypes.cancel = c)),
      }),
    cancel: {} as Canceler,
  },
};
