import * as React from 'react';
import { number } from 'libs/number';
import { Icon, Animated } from 'ui/atoms';
import { Report } from 'ui/organisms/index';

import './Card.scss';

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`zh-card ${className}`}>{children}</div>
);

interface HeaderProps {
  className?: string;
  title?: string;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
}

export const CardHeader: React.FC<HeaderProps> = ({ className = '', title, leftSide, rightSide }) => (
  <div className={`zh-card-header ${className}`}>
    <div className="zh-card-header-side-left">
      {title && <div className="zh-card-header-title">{title}</div>}
      {leftSide}
    </div>

    {rightSide && <div className="zh-card-header-side-right">{rightSide}</div>}
  </div>
);

interface FooterProps {
  onRefresh?: () => void;
  className?: string;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  current?: number;
  currentLabel?: string;
  total?: number;
  onViewMore?: () => void;
}

export const CardFooter: React.FC<FooterProps> = ({
  onRefresh,
  className = '',
  current,
  currentLabel = '',
  total,
  leftSide,
  rightSide,
  onViewMore,
}) => {
  const hasCurrent = React.useMemo(() => current !== undefined, [current]);
  const hasOnRefresh = React.useMemo(() => onRefresh !== undefined, [onRefresh]);

  return (
    <div className={`zh-card-footer ${className}`}>
      {hasCurrent || hasOnRefresh ? (
        <div className="zh-card-footer-total">
          {hasOnRefresh && <Icon type="refresh" />}

          {hasOnRefresh && (
            <>
              {current ? `${current} ${currentLabel}` : null} {total ? `din ${number(total)}` : null}
            </>
          )}
        </div>
      ) : null}

      {leftSide && <div className="zh-card-footer-side-left">{leftSide}</div>}

      {rightSide || onViewMore !== undefined ? (
        <div className="zh-card-footer-side-right">
          {rightSide}
          {onViewMore !== undefined && (
            <div className="zh-card-footer-view-more">
              Vezi mai multe anunțuri <Icon type="arrow-right-long" />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

interface AlertProps {
  className?: string;
  type?: 'warning' | 'info' | 'error';
  label?: string;
}

export const CardAlert: React.FC<AlertProps> = ({ type = 'warning', className = '', label }) => (
  <Animated className="zh-card-alert-wrapper">
    <div className={`zh-card-alert zh-card-alert-type-${type} ${className}`}>
      {label && (
        <div className="zh-card-alert-label">
          <Icon type="info" />
          {label}
        </div>
      )}

      <div className="zh-card-alert-report">
        <Report />
      </div>
    </div>
  </Animated>
);
