import * as React from 'react';
import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const professors = {
  get: {
    action: () =>
      axios
        .get(`users/professors_list`, { cancelToken: new cancelToken((c: Canceler) => (professors.get.cancel = c)) })
        .then((response) => {
          const data = response.data.map((item: { [key: string]: any }) => ({
            value: item.key,
            title: (
              <>
                <div
                  className="zh-input-phone-country"
                  style={{
                    background: `url(${item.profile_picture})`,
                  }}
                />
                {item.label}
              </>
            ),
          }));

          return { ...response, data };
        }),
    cancel: {} as Canceler,
  },
};
