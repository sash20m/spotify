import * as React from 'react';

import './Form.scss';

interface Props {
  onSubmit: () => void;
  className?: string;
}

export const Form: React.FC<Props> = ({ onSubmit, className = '', children }) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    if (e.preventDefault) e.preventDefault();

    return onSubmit();
  };

  return (
    <form className={`zh-form ${className}`} onSubmit={onSubmitHandler}>
      {children}
    </form>
  );
};

interface ItemProps {
  label?: React.ReactNode;
  className?: string;
  required?: true;
  extraStatus?: 'error' | 'warning' | 'regular' | 'success';
  extra?: string | string[];
  flex?: boolean;
  column?: boolean;
}

export const FormItem: React.FC<ItemProps> = ({
  label,
  className = '',
  required,
  extraStatus = 'error',
  extra,
  flex,
  children,
}) => (
  <div className="zh-form-item">
    {label && (
      <div className="zh-form-item-label">
        {label} {required && <span>*</span>}
      </div>
    )}

    <div
      className={`zh-form-children${flex ? ' zh-form-children-flex' : ''}
        ${extra && extraStatus === 'error' ? ' has-error' : ''} 
        ${className}`}
    >
      {children}

      {extra && className && (
        <div className={`zh-form-extra zh-form-extra-${extraStatus}`}>
          {Array.isArray(extra) ? extra.join(',') : extra}
        </div>
      )}
    </div>

    {extra && !className && (
      <div className={`zh-form-extra zh-form-extra-${extraStatus}`}>
        {Array.isArray(extra) ? extra.join(',') : extra}
      </div>
    )}
  </div>
);

export const FormItems: React.FC<ItemProps> = ({ children }) => <div className="zh-form-items">{children}</div>;
