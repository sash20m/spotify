import * as React from 'react';
import { Link } from 'estafette-router';
import { LoaderSpinner, Icon } from 'ui/atoms';

import './Breadcrumbs.scss';

export interface Breadcrumb {
  route?: string;
  params?: { [key: string]: any };
  label: string;
  disabled?: boolean;
  loading?: boolean;
}

interface Props {
  className?: string;
  data: Breadcrumb[];
}

export const Breadcrumbs: React.FC<Props> = ({ className = '', data: $data }) => {
  const data = $data.map((item, key) => ({ ...item, key }));

  return (
    <div className={`zh-breadcrumbs-wrapper ${className}`}>
      <ul className="zh-breadcrumbs">
        {data.map(({ key, route, params, label, disabled, loading }) => (
          <li key={key} className="zh-breadcrumb-item">
            {loading ? (
              <span className="zh-breadcrumbs-item-loading">
                <LoaderSpinner size="small" />
                Loading ...
              </span>
            ) : !disabled ? (
              route ? (
                <Link to={route} params={params} className="zh-breadcrumbs-item-link">
                  {label}
                </Link>
              ) : (
                <span className="zh-breadcrumbs-item-regular">{label}</span>
              )
            ) : (
              <span className="zh-breadcrumbs-item-disabled">{label}</span>
            )}

            {data[key + 1] ? (
              <span className="zh-breadcrumbs-devider">
                <Icon type="arrow-right" />
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
