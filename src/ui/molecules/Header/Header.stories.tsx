import * as React from 'react';
import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
};

const props = {
  name: 'Daily Mix',
  description: 'A lot of artists',
  owner: { display_name: 'Spotify' },
  tracks: { total: 50 },
  images: [{ url: 'album-cover.jpeg' }],
  loading: false,
};

export const regular = (): React.ReactNode => <Header {...props} />;
