import * as React from 'react';
import { Collapse, CollapseItem } from './Collapse';

export default {
  title: 'Collapse',
  component: Collapse,
};

export const regular = (): React.ReactElement => {
  const [collapsed, setCollapsed] = React.useState<number[]>([]);

  const onToggleCollapse = (key: number): void =>
    setCollapsed((prevCollapsed) =>
      prevCollapsed.includes(key) ? prevCollapsed.filter(($key) => key !== $key) : [...prevCollapsed, key],
    );

  return (
    <Collapse collapsedKeys={collapsed} onToggle={onToggleCollapse}>
      <CollapseItem title={<span>Title</span>}>Children</CollapseItem>

      <CollapseItem title={<span>Title 2</span>}>Children 2</CollapseItem>
    </Collapse>
  );
};
