import { save } from 'react-cookies';
import { auth } from './api/auth';
import { AccessToken } from './api/auth.types';

export const getToken = async (): Promise<void> => {
  await auth
    .getToken<AccessToken>()
    .then((data) => {
      console.log(data, 'eee');
      if (data.data) {
        save('jwt-token', `${data.data.access_token}`, { path: '/' });
      }
      return data.data;
    })
    .catch((error) => {
      return error.response;
    });
};
