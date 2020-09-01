import * as React from 'react';
import './Content.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Content: React.FC<Props> = ({ className = '', children }) => {
  return <div className={`content ${className}`}>{children}</div>;
};
