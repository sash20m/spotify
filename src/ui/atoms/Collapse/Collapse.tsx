import * as React from 'react';
import AnimateHeight from 'react-animate-height';

interface Props {
  className?: string;
  collapsedKeys: number[];
  children: React.ReactElement[];
  onToggle: (key: number) => void;
}

export const Collapse: React.FC<Props> = ({ onToggle, className = '', collapsedKeys, children }) => {
  if (!children && !Array.isArray(children)) {
    console.error('ErrorCollapse children have to be an array of React.ReactElement');

    return null;
  }

  return (
    <div className={`zh-collapse ${className}`}>
      {children.map((child, key) =>
        React.cloneElement(child, {
          key,
          opened: collapsedKeys.includes(key),
          onToggle: () => onToggle(key),
        }),
      )}
    </div>
  );
};

interface ItemProps {
  className?: string;
  opened?: boolean;
  onToggle?: (key: number) => void;
  title: React.ReactElement;
}

export const CollapseItem: React.FC<ItemProps> = ({ onToggle, className = '', title, opened, children }) => {
  return (
    <div
      className={`zh-collapse-item ${className}`}
      {...(onToggle !== undefined ? { onClick: (): void => onToggle(0) } : {})}
    >
      <div className="zh-collapse-item-title">{title}</div>

      <AnimateHeight duration={150} height={opened ? 'auto' : 0}>
        <div className={`zh-collapse-item-children`}>{children}</div>
      </AnimateHeight>
    </div>
  );
};
