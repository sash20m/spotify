import * as React from 'react';
import { Song } from './Song';

export default {
  title: 'Song',
  component: Song,
};

const props = {
  item: {
    added_at: '1',
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
  count: 1,
  nextItem: {
    added_at: '1',

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
  previousItem: {
    added_at: '1',

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
};

export const regular = (): React.ReactNode => <Song {...props} />;
