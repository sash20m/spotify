import * as React from 'react';
import { Link } from 'estafette-router';
import OldTabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';

import './Tabs.scss';

export interface Tab {
  route?: string;
  params?: { [key: string]: string | number };
  disabled?: boolean;
  label: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

interface Props {
  className?: string;
  data: Tab[];
}

export const Tabs: React.FC<Props> = ({ className = '', data: $data }) => {
  const data = React.useMemo(() => $data.map((item, key) => ({ ...item, key })), [$data]);

  return (
    <OldTabs className={`zh-tabs ${className}`}>
      {data.map(({ key, onClick, route, params, disabled, label, active }) => (
        <TabPane
          key={key}
          tab={
            <div className={`zh-tabs-item zh-tabs-item-${active ? 'active' : disabled ? 'disabled' : 'unactive'}`}>
              {route ? (
                <Link onClick={onClick} route={route} params={params} className="zh-tabs-item-label">
                  {label}
                </Link>
              ) : (
                <span onClick={onClick} className="zh-tabs-item-label">
                  {label}
                </span>
              )}
            </div>
          }
        />
      ))}
    </OldTabs>
  );
};
