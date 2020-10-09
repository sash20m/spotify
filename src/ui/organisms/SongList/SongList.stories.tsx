import * as React from 'react';
import { SongList } from './SongList';

export default {
  title: 'SongList',
  component: SongList,
};

const props = {
  tracks: {
    total: 50,
    items: [
      {
        track: {
          album: {
            images: [
              {
                height: 100,
                url: 'album-cover.jpeg',
              },
            ],
            name: 'Wonder',
          },
          name: 'Wonder',
          artists: [
            {
              name: 'Shawn Mendes',
            },
          ],
          duration_ms: 191000,
          id: '123',
          uri: '123',
        },
      },
      {
        track: {
          album: {
            images: [
              {
                height: 100,
                url: 'album-cover.jpeg',
              },
            ],
            name: 'Wonder',
          },
          name: 'Wonder',
          artists: [
            {
              name: 'Shawn Mendes',
            },
          ],
          duration_ms: 191000,
          id: '123',
          uri: '123',
        },
      },
      {
        track: {
          album: {
            images: [
              {
                height: 100,
                url: 'album-cover.jpeg',
              },
            ],
            name: 'Wonder',
          },
          name: 'Wonder',
          artists: [
            {
              name: 'Shawn Mendes',
            },
          ],
          duration_ms: 191000,
          id: '123',
          uri: '123',
        },
      },
    ],
  },
  loading: false,
};

export const regular = (): React.ReactNode => <SongList {...props} />;
