import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const courses = {
  get: {
    action: (params = {}) =>
      axios.get(`courses`, { params, cancelToken: new cancelToken((c: Canceler) => (courses.get.cancel = c)) }),
    cancel: {} as Canceler,
  },
};
