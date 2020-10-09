import { routeHelper } from 'libs/routerHelper';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useMenu = (): { iconType: string; label: string; route: string; index: boolean; active: boolean }[] => {
  const menu = useMemo(
    () => [
      {
        iconType: 'home',
        label: 'home',
        route: '/',
        index: true,
        active: routeHelper('/'),
      },
      {
        iconType: 'playlist',
        label: 'playlists',
        route: '/playlists',
        index: false,
        active: routeHelper('/playlists'),
      },
    ],
    [useLocation],
  );

  return menu;
};
