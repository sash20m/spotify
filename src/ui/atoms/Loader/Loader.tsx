import * as React from 'react';
import './Loader.scss';

export type Size = 'small' | 'middle' | 'regular';

interface Props {
  size?: Size;
  className?: string;
  fixed?: boolean;
}

const LoaderSpinner: React.FC<Props> = ({ fixed, size = 'regular', className = '' }) => (
  <div
    className={`zh-loader-spinner zh-loader-spinner-type-simple zh-loader-spinner-size-${size}${
      fixed ? ' fixed' : ''
    } ${className}`}
  />
);

export const LoaderInline: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <span className={`zh-loader-inline ${className}`}>
      <LoaderSpinner size="middle" />
      Loading ...
    </span>
  );
};
