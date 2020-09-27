import * as React from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../hooks';
import { ReactComponent as HomeIcon } from './Home.svg';
import './Sidebar.scss';

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <img src="logo.png" className="sidebar__logo" alt="logo" />

      <div className="sidebar__menu">
        {useMenu.map((menuItem) => (
          <Link key={menuItem.label} to={menuItem.route}>
            <p className="sidebar__menu__item">
              <HomeIcon className="icon" />
              {menuItem.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
