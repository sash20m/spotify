import * as React from 'react';
import { Navbar, Header } from 'features/public/organisms';

import './Public.scss';

export const Public: React.FC = ({ children }) => {
  return (
    <div className="public">
      <Navbar />
      <Header />
      {children}
    </div>
  );
};
