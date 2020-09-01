import * as React from 'react';
import { LoaderSpinner } from 'ui/atoms';

import './Button.scss';

interface Props {
  onClick?: () => void;
  prefix?: React.ReactNode;
  type?: 'primary' | 'invert' | 'transparent' | 'border';
  loading?: boolean;
  submit?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<Props> = ({
  submit = false,
  onClick,
  prefix,
  className = '',
  type = 'regular',
  loading,
  ...props
}) => {
  const [pulse, setPulse] = React.useState<boolean>(false);
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    return (): void => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const onClickHandler = (): void => {
    setPulse(true);

    timer.current = setTimeout(() => {
      setPulse(false);
    }, 1000);

    if (onClick !== undefined) {
      return onClick();
    }
  };

  return (
    <div
      className={`zh-button-wrapper zh-button-type-${type} ${prefix !== undefined ? 'has-prefix' : ''} ${className}`}
      onClick={onClickHandler}
      role="presentation"
    >
      {prefix ? (
        <div className="zh-button-prefix">{loading ? <LoaderSpinner size="small" /> : prefix}</div>
      ) : loading ? (
        <div className={`zh-button-loading zh-button-loading-${type}`}>
          <LoaderSpinner size="small" />
        </div>
      ) : null}

      <button type={submit ? 'submit' : 'button'} className="zh-button" disabled={props.disabled || loading}>
        {props.children}
      </button>

      {pulse ? <div className="zh-button-pulse" /> : null}
    </div>
  );
};

export const ButtonGroup: React.FC = ({ children }) => <div className="zh-button-group">{children}</div>;
