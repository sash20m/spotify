import * as React from 'react';
import { Tooltip, Input, Icon, CheckboxGroup, Button } from 'ui/atoms';

import './SelectUser.scss';

interface Props {
  value: string;
}

const options = [
  {
    label: 'Vladimir Josan',
    value: 1,
  },
  {
    label: 'John Doe',
    value: 2,
  },
];

export const SelectUser: React.FC<Props> = ({ value }) => {
  return (
    <Tooltip
      placement="bottomLeft"
      className="zh-select-user-tooltip"
      content={
        <>
          <div className="zh-select-user-tooltip-title">
            <Input styleType="transparent" suffix={<Icon type="search" />} value="" placeholder="Căută după nume" />
          </div>

          <div className="zh-select-user-tooltip-items">
            <CheckboxGroup options={options} values={[1]} onChange={console.log} />
          </div>

          <div className="zh-select-user-tooltip-footer">
            <Button type="primary">Aplică</Button>
          </div>
        </>
      }
    >
      <Input
        className="zh-select-user-input"
        styleType="transparent"
        prefix={<Icon type="user-strict" />}
        value={value}
        placeholder="Selectați profesor"
      />
    </Tooltip>
  );
};
