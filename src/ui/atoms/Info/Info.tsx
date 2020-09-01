import * as React from 'react';
import { LoaderSpinner } from 'ui/atoms';

import './Info.scss';

interface Props {
  primary?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  label: React.ReactNode;
}

export const Info: React.FC<Props> = ({ loading, icon, label, primary }) => {
  return (
    <div
      className={`
      zh-info zh-info-${icon ? 'icon' : 'no-icon'}
      ${loading ? ' zh-info-loading' : ''} 
      zh-info-text-${primary ? 'primary' : 'regular'}`}
    >
      {icon && <div className="zh-info-icon">{!loading ? icon : <LoaderSpinner size="small" />}</div>}

      {label}
    </div>
  );
};
