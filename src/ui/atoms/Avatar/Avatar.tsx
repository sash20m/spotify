import * as React from 'react';
import { firstLetters } from 'libs/string';
import { getStatus } from 'ui/atoms';

import './Avatar.scss';

interface Props {
  type?: 'regular';
  size?: 'small' | 'big';
  className?: string;
  circle?: boolean;
  alt: string;
  img?: string;
  status?: string;
}

export const Avatar: React.FC<Props> = ({
  type = 'regular',
  size = 'small',
  className = '',
  circle,
  alt,
  img,
  status: $status,
}) => {
  const shortAlt = React.useMemo(() => firstLetters(alt), [alt]);
  const status = React.useMemo((): string => ($status ? getStatus($status) : ''), [$status]);

  return (
    <div className={`zh-avatar zh-avatar-size-${size} zh-avatar-type-${type}${circle ? ' circle' : ''} ${className}`}>
      {img ? <img className="zh-avatar-img" src={img} alt={alt} /> : null}

      <div className="zh-avatar-short-alt">{shortAlt}</div>

      {status ? <div className={`zh-avatar-status zh-avatar-status-${status}`} /> : null}
    </div>
  );
};

interface CardProps {
  type?: 'regular';
  size?: 'small' | 'big';
  className?: string;
  alt: string;
  img?: string;
  status?: string;
}

export const AvatarCard: React.FC<CardProps> = ({ className = '', img, alt, status }) => (
  <div className={`zh-avatar-card ${className}`}>
    <Avatar size="small" img={img} alt={alt} status={status} />

    <div className="zh-avatar-card-alt">{alt}</div>
  </div>
);

export const AvatarInline: React.FC<CardProps> = ({ className = '', img, alt, status }) => (
  <div className={`zh-avatar-inline ${className}`}>
    <Avatar size="small" img={img} alt={alt} status={status} circle />

    <div className="zh-avatar-inline-alt">{alt}</div>
  </div>
);
