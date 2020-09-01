import * as React from 'react';
import { LoaderSpinner, Size } from './LoaderSpinner';

import './Loader.scss';

interface Props {
  size?: Size;
  loading: boolean;
  fixed?: boolean;
  height?: number | string;
  children: React.ReactElement;
}

export const Loader: React.FC<Props> = ({ fixed, size = 'regular', loading, height = 350, children }) => {
  return (
    <div className="zh-loader" style={{ minHeight: height }}>
      <LoaderSpinner fixed={fixed} size={size} className={!loading ? 'hide' : ''} />

      <div className="fade-in" style={{ display: loading ? 'none' : undefined }}>
        {children}
      </div>
    </div>
  );
};

export const LoaderInline: React.FC = () => {
  return (
    <span className="zh-loader-inline">
      <LoaderSpinner size="small" />
      Loading ...
    </span>
  );
};
