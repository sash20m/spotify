import * as React from 'react';
import { Link, useRouterHelpers } from 'estafette-router';
import { save, load } from 'react-cookies';
import { Profile, Notifications } from 'ui/organisms';
import { Icon, Avatar } from 'ui/atoms';

import './Layout.scss';

interface TabProps {
  className?: string;
  iconType?: string;
  invert?: boolean;
  label?: string;
  route?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: { [key: string]: any };
}

const Tab: React.FC<TabProps> = ({
  className = '',
  active,
  iconType,
  invert,
  label,
  route,
  params,
  disabled,
  onClick,
}) => {
  const Component: React.FC<TabProps> = ({ children }) => {
    const classNames = React.useMemo(
      () =>
        `zh-layout-left-bar-item${invert ? ' zh-layout-left-bar-item-invert' : ''}${
          disabled ? ' zh-layout-left-bar-item-disabled' : ''
        }${active ? ' active' : ''} ${className}`,
      [disabled, invert],
    );

    return route ? (
      <Link className={classNames} route={route} params={params} onClick={onClick}>
        {children}
      </Link>
    ) : (
      <div className={classNames} onClick={onClick}>
        {children}
      </div>
    );
  };

  return (
    <Component>
      <Icon type={iconType} />

      <span>{label}</span>

      <Icon type="arrow-right" />
    </Component>
  );
};

interface Props {
  contentClass?: string;
  className?: string;
  title?: React.ReactNode;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({
  contentClass = '',
  className = '',
  title,
  leftSide,
  rightSide,
  children,
}) => {
  const { isRouteActive } = useRouterHelpers();
  const [toggled, setToggled] = React.useState(`${load('toggled')}` === 'true');
  const [mobileOpened, setMobileOpened] = React.useState(false);

  const onToggle = (): void =>
    setToggled((s) => {
      save('toggled', `${!s}`, { path: '/' });

      return !s;
    });

  const onToggleMobile = (): void => setMobileOpened((s) => !s);

  return (
    <div
      className={`zh-layout zh-layout-mobile-${mobileOpened ? 'opened' : 'closed'} zh-layout-state-${
        toggled ? 'toggled' : 'untoggled'
      } ${className}`}
    >
      <div className="zh-layout-top-bar">
        {/* mobile part */}
        <div className="zh-layout-top-bar-mobile">
          <div className="zh-layout-top-bar-mobile-toggler" onClick={onToggleMobile}>
            <Icon type={mobileOpened ? 'close' : 'menu'} />
          </div>

          <div className="zh-layout-top-bar-mobile-logo" />
        </div>
        {/* mobile part */}

        {title && <div className="zh-layout-top-bar-title">{title}</div>}

        {leftSide && <div className="zh-layout-top-bar-left">{leftSide}</div>}

        <div className="zh-layout-top-bar-right">
          {rightSide}

          <div className="zh-layout-top-bar-right-item">
            <Notifications />

            <Profile>
              <div className="zh-profile-avatar">
                <div className="zh-profile-avatar-left">
                  <div className="zh-profile-avatar-left-name">Wladimir Zhosan</div>
                  <div className="zh-profile-avatar-left-code">#0123465987</div>
                </div>

                <div className="zh-profile-avatar-right">
                  <Avatar alt="Wladimir Zhosan" />
                  <Icon type="arrow-up-filled" />
                </div>
              </div>
            </Profile>
          </div>
        </div>
      </div>

      <div className="zh-layout-left-bar">
        <div className="zh-layout-left-bar-top">
          <div className="zh-layout-left-bar-logo" />

          <Tab
            className="zh-layout-left-bar-toggler"
            invert
            iconType="menu-fold"
            label="Ascundeți titlurile"
            onClick={onToggle}
          />

          <Tab
            iconType="calendar"
            label="Calendar de evenimente"
            route="EventsPage"
            active={isRouteActive(['EventsPage'])}
          />

          <Tab
            iconType="location"
            label="Institute"
            route="GeneralInstitutePage"
            active={isRouteActive([
              'GeneralInstitutePage',
              'SessionsinstitutePage',
              'PrevSessionsinstitutePage',
              'TeachersInstitutePage',
              'StudentsInstitutePage',
              'AnnouncementsInstitutePage',
            ])}
          />

          <Tab
            iconType="announcement"
            label="Anunțuri"
            route="AnnouncementsPage"
            active={isRouteActive(['AnnouncementsPage'])}
          />

          <Tab
            iconType="session"
            label="Sesiuni"
            route="PlannedSessionsPage"
            active={isRouteActive(['PlannedSessionsPage'])}
          />
        </div>

        <div className="zh-layout-left-bar-bottom">
          <Profile placement="rightBottom">
            <Tab
              className="zh-user-settings"
              invert
              iconType="user"
              label="Setările contului"
              active={isRouteActive(['PersonalAccountPage', 'EditPersonalAccountPage'])}
            />
          </Profile>

          <Tab invert iconType="question" label="Ghid de utilizare" />
        </div>
      </div>

      {/* mobile part */}
      {mobileOpened && <div className="zh-layout-mobile-mask" onClick={onToggleMobile} />}
      {/* mobile part */}

      <div className="zh-layout-content-wrapper">
        <div className={`zh-layout-content ${contentClass}`}>{children}</div>
      </div>

      <div className="zh-layout-footer">
        <span>
          Designed by <b>EBS Integrator</b>
        </span>
      </div>
    </div>
  );
};
