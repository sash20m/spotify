import * as React from 'react';
import { Link } from 'estafette-router';
import { Icon, Tooltip } from 'ui/atoms';

import './Profile.scss';

interface Props {
  placement?: 'bottomRight' | 'rightBottom';
}

export const Profile: React.FC<Props> = ({ placement = 'bottomRight', children }) => (
  <Tooltip
    fixed
    className="zh-profile"
    placement={placement}
    content={
      <>
        <div className="zh-profile-title">Gestionarea contului</div>

        <div className="zh-profile-items">
          <Link route="PersonalAccountPage">
            <div className="zh-profile-item">
              <Icon type="user-filled" />
              Cont Personal
            </div>
          </Link>

          <div className="zh-profile-item">
            <Icon type="gear" />
            Setari
          </div>

          <div className="zh-profile-item">
            <Icon type="logout" />
            Ieșire
          </div>
        </div>
      </>
    }
  >
    {children}
  </Tooltip>
);
