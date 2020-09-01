import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

interface City {
  id: number;
  title: string;
  title_en: string;
  title_ro: string;
  title_ru: string;
  country: number;
}

export const cities = {
  get: {
    action: ({ lang: lang = 'en', ...params }) =>
      axios
        .get<City[]>(`cities`, { params, cancelToken: new cancelToken((c: Canceler) => (cities.get.cancel = c)) })
        .then((response) => ({
          ...response,
          data: response.data.map((item: { [key: string]: any }) => ({
            value: item.id,
            title: item[`title_${lang}`] || item.title || item.title_en,
            countryID: item.country,
          })),
        })),
    cancel: {} as Canceler,
  },
};
