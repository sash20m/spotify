import * as React from 'react';
import OldTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

import './Tooltip.scss';

interface Props {
  className?: string;
  fixed?: boolean;
  content: (() => React.ReactNode) | React.ReactNode;
  trigger?: string[];
  placement?: string;
  children: any;
}

export const Tooltip: React.FC<Props> = ({
  className = '',
  fixed,
  trigger = ['click'],
  placement,
  content,
  children,
}) => (
  <OldTooltip
    overlay={<div className={`zh-tooltip-content ${className}`}>{content}</div>}
    trigger={trigger}
    overlayClassName={`zh-tooltip zh-tooltip-${fixed ? 'fixed' : 'relative'}`}
    placement={placement}
  >
    {children}
  </OldTooltip>
);
