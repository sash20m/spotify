import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

interface Professor {
  id: number;
  profile_picture: string;
  first_name: string;
  last_name: string;
}

export interface Session {
  id: number;
  name: string;
  professor: Professor;
  institution: string;
  faculty: string;
  course: string;
  start_date: string;
  end_date: string;
  country: string;
  city: string;
}

export interface Sessions {
  count: number;
  total_pages: number;
  per_page: number;
  current_page: number;
  results: Session[];
}

export const sessions = {
  get: {
    action: (options: any) => {
      const optionKeys = Object.keys(options);

      let filters = '';

      if (optionKeys.length > 0) {
        optionKeys.map((option: string) => {
          if (
            option in options &&
            ((Number.isInteger(options[option]) && options[option] > -1) || options[option].length)
          ) {
            if (!filters.length) {
              filters += `?${option}=${options[option]}`;
            } else {
              filters += `&${option}=${options[option]}`;
            }
          }

          return option;
        });
      }

      return axios.get(`sessions${filters}`, {
        cancelToken: new cancelToken((c: Canceler) => (sessions.get.cancel = c)),
      });
    },
    cancel: {} as Canceler,
  },

  register: {
    action: ({ id = 0, ...params }) =>
      id &&
      axios.patch(`sessions/${id}/register`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (sessions.register.cancel = c)),
      }),
    cancel: {} as Canceler,
  },
};
