import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const playlist = {
  get: (id: string) =>
    axios.get(`/playlists/${id}`, {
      cancelToken: new cancelToken((c: Canceler) => (playlist.cancel = c)),
    }),
  cancel: {} as Canceler,
};
