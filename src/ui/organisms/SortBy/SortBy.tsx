import * as React from 'react';
import { keys } from 'libs/object';
import { Tooltip, Button, Icon } from 'ui/atoms';

import './SortBy.scss';

interface Props {
  value: 'data' | 'relevant' | '';
  onChange: (newValue: 'data' | 'relevant' | '') => void;
}

const sorts = {
  data: 'După dată',
  relevant: 'By relevanță',
  '': 'Sortare după',
};

export const SortBy: React.FC<Props> = ({ value, onChange }) => {
  const onChangeHandler = React.useCallback((newValue) => onChange(newValue), []);

  return (
    <Tooltip
      className="zh-sort-by"
      placement="bottomRight"
      content={
        <>
          <div className="zh-sort-by-title">Sortare după</div>

          <div className="zh-sort-by-items">
            {/* TODO: change by API relevant data */}
            {keys(sorts)
              .filter((sort) => sort)
              .map((sort) => {
                const active = value === sort;

                return (
                  <div
                    key={sort}
                    className={`zh-sort-by-item${active ? ' zh-sort-by-item-active' : ''}`}
                    onClick={() => onChangeHandler(sort)}
                  >
                    {sorts[sort]}

                    {active && <Icon type="check" />}
                  </div>
                );
              })}
          </div>
        </>
      }
    >
      <Button className="zh-sort-by-button" prefix={<Icon type="sort" />}>
        {sorts[value] || 'Sortare după'}
      </Button>
    </Tooltip>
  );
};
