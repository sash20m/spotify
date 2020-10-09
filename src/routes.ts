import { HomePage, PlaylistPage, PlaylistsPage } from './pages';

export const routes = [
  { path: '/', exact: true, component: HomePage },
  { path: '/playlists', component: PlaylistsPage },
  { path: '/playlist/:id', component: PlaylistPage },
];
