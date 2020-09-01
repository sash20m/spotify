import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

interface Country {
  id: number;
  title: string;
  title_en: string;
  title_ro: string;
  title_ru: string;
  code: string;
  phone_prefix: string;
}

interface Phone {
  phone_prefix: string[];
}

export const countries = {
  get: {
    action: ({ lang: lang = 'en', ...params }) =>
      axios
        .get<Country[]>(`countries`, {
          params,
          cancelToken: new cancelToken((c: Canceler) => (countries.get.cancel = c)),
        })
        .then((response) => ({
          ...response,
          data: response.data.map((item: { [key: string]: any }) => ({
            value: item.id,
            title: item[`title_${lang}`] || item.title || item.title_en,
            code: item.code,
            phone: item.phone_prefix,
          })),
        })),
    cancel: {} as Canceler,
  },
  phone: {
    action: ({ country = '', ...params }) =>
      country &&
      axios.get<Phone>(`countries/${country}/prefixes`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (countries.get.cancel = c)),
      }),
    cancel: {} as Canceler,
  },
};
