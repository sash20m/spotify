import * as React from 'react';

import './Roadmap.scss';

export interface Roadmap {
  target: string;
  children: React.ReactNode;
}

interface Props {
  data: Roadmap[];
  className?: string;
}

export const Roadmap: React.FC<Props> = ({ data, className = '' }) => (
  <div className="zh-roadmap-wrapper">
    {data.map(({ target, children }) => (
      <div className={`zh-roadmap ${className}`} key={target}>
        <div className="zh-roadmap-left">
          <div className="zh-roadmap-target">{target}</div>
          <div className="zh-roadmap-dot" />
        </div>

        <div className="zh-roadmap-right">{children}</div>
      </div>
    ))}
  </div>
);
