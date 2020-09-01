import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const faculties = {
  get: {
    action: (params = {}) =>
      axios.get(`faculties`, { params, cancelToken: new cancelToken((c: Canceler) => (faculties.get.cancel = c)) }),
    cancel: {} as Canceler,
  },
};
