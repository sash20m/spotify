import * as React from 'react';
import { Middleware } from 'Middleware/Middleware';
import { Sidebar } from 'ui/molecules';

import './Layout.scss';

interface Layout {
  children: React.ReactNode;
}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <Middleware>
      <div className="layout">
        <div className="layout__content">
          <Sidebar />
          {children}
        </div>
      </div>
    </Middleware>
  );
};
