import * as React from 'react';
import { Icon, Tooltip, Time, Loader } from 'ui/atoms';

import './Notifications.scss';

const notifications = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

export const Notifications: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    return (): void => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const onClickHandler = (): void => {
    setLoading(true);

    timer.current = setTimeout(() => setLoading(false), 500);
  };

  return (
    <Tooltip
      fixed
      className="zh-notifications"
      placement="bottomRight"
      content={
        <>
          <div className="zh-notifications-title">
            <span>Notificări</span>
            <span>Arată toate</span>
          </div>

          <Loader size="middle" height={62} loading={loading}>
            <div className="zh-notifications-items">
              <div className="zh-notifications-item">
                <Icon type="student" />

                <div className="zh-notifications-item-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                </div>

                <div className="zh-notifications-item-info">
                  <Time date="Mar 08, 12:45" noParse />
                </div>
              </div>

              <div className="zh-notifications-item">
                <Icon type="student" />

                <div className="zh-notifications-item-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                </div>

                <div className="zh-notifications-item-info">
                  <Time date="Mar 08, 12:45" noParse />
                </div>
              </div>
            </div>
          </Loader>
        </>
      }
    >
      <div className="zh-notifications-bell" onClick={onClickHandler}>
        <Icon type={notifications > 0 ? 'bell-filled' : 'bell'} />

        {notifications > 0 && <div className="zh-notifications-bell-badge">{notifications}</div>}
      </div>
    </Tooltip>
  );
};
