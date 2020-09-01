import * as React from 'react';
import OldTable from 'rc-table';
import { Config } from 'config';
import { Icon } from 'ui/atoms';

import 'rc-table/assets/index.css';

import './Table.scss';

const types: ['desc', 'asc'] = ['desc', 'asc'];

export interface Column<T> {
  title?: string;
  dataIndex?: string;
  className?: string;
  width?: string | number;
  onFilter?: (type: 'asc' | 'desc') => void;
  render?: (value: T) => React.ReactNode;
  mobileRender?: (data: T) => React.ReactNode;
  action?: boolean;
}

interface Props<T> {
  className?: string;
  page?: number;
  data: T[];
  columns: Column<T>[];
  size?: 'small' | 'big' | 'regular';
}

export const Table = <T extends object>({
  page,
  columns: $columns,
  data: $data = [],
  className = '',
  size = 'regular',
}: Props<T>): React.ReactElement => {
  const [filters, setFilters] = React.useState<{ [key: number]: 'desc' | 'asc' }>({});

  const onFilterHandler = React.useCallback(
    (key: number) => {
      const cloneFilters = { ...filters };

      if (cloneFilters[key]) {
        if (types[types.length - 1] === cloneFilters[key]) {
          delete cloneFilters[key];
        } else {
          // get next to
          cloneFilters[key] = types[types.indexOf(cloneFilters[key]) + 1];
        }
      } else {
        cloneFilters[key] = types[0];
      }

      const { onFilter } = $columns[key];
      if ($columns[key] && onFilter !== undefined) {
        onFilter(cloneFilters[key] || '');
      }

      setFilters(cloneFilters);
    },
    [$columns, filters],
  );

  const data = React.useMemo(
    () =>
      $data.map<{ key: number; [key: string]: any }>((item, key) => ({
        ...item,

        key: page !== undefined && page > 1 ? (page - 1) * Config.PER_PAGE_TABLE + key + 1 : key + 1,
      })),
    [$data],
  );

  const columns = React.useMemo(
    () =>
      $columns.map(({ title, onFilter, ...column }, key) => ({
        ...column,
        key,
        title: onFilter ? (
          <span
            className={`zh-table-th-filtered zh-table-th-filtered-${filters[key] || 'none'}`}
            onClick={(): void => onFilterHandler(key)}
          >
            {title} <Icon type="arrow-down" />
          </span>
        ) : (
          title
        ),
      })),
    [$columns, filters, onFilterHandler],
  );

  return (
    <div className={`zh-table-wrapper ${className}`}>
      <OldTable className={`zh-table zh-table-size-${size}`} data={data} columns={columns} />

      <div className="zh-table-mobile">
        {data.map((item: any) => (
          <div key={item.key} className="zh-table-mobile-item">
            <div className="zh-table-mobile-item-key">{item.key}</div>

            {columns.map((column) => {
              const render =
                column.mobileRender !== undefined
                  ? column.mobileRender(item as T)
                  : column.render !== undefined
                  ? column.render(item as T)
                  : column.dataIndex !== undefined
                  ? (item[column.dataIndex] as T)
                  : '---';

              return (
                <React.Fragment key={column.key}>
                  {column.action !== true ? (
                    <>
                      {column.key === 0 && (
                        <div className="zh-table-mobile-item-title" key={column.key}>
                          {render}
                        </div>
                      )}

                      {column.key === 1 && (
                        <div className="zh-table-mobile-item-desc" key={column.key}>
                          {render}
                        </div>
                      )}

                      {column.key > 1 && (
                        <div className="zh-table-mobile-item-child" key={column.key}>
                          <span className="zh-table-mobile-item-child-title">{column.title}:</span>
                          {render}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="zh-table-mobile-item-action" key={column.key}>
                      {render}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
