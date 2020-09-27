import * as React from 'react';
import { Sidebar, Player } from 'ui/molecules';

import './Layout.scss';

interface Layout {
  children: React.ReactNode;
}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__content">
        <Sidebar />
        {children}
      </div>
      <Player />
    </div>
  );
};
