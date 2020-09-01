import * as React from 'react';
import { Icon } from 'ui/atoms';

import './Checkbox.scss';

interface Props {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: () => void;
}

export const Checkbox: React.FC<Props> = ({ label, checked, onChange }) => (
  <div className="zh-checkbox">
    <label>
      <input className="zh-checkbox-mask" type="checkbox" checked={checked} onChange={onChange} />

      <div className="zh-checkbox-check-wrapper">
        <Icon type="check" />
      </div>

      <div className="zh-checkbox-label">{label}</div>
    </label>
  </div>
);

export type Option = {
  label?: string;
  value: any;
};

interface GroupProps {
  options: Option[];
  values: any[];
  onChange: (newValue: any) => void;
}

export const CheckboxGroup: React.FC<GroupProps> = ({ options, values, onChange }) => {
  const onChangeHandler = (checkboxValue: any): void =>
    onChange(values.includes(checkboxValue) ? values.filter((v) => checkboxValue !== v) : [...values, checkboxValue]);

  return (
    <div className="zh-checkbox-group">
      {options.map(({ label, value }) => (
        <Checkbox key={value} label={label} checked={values.includes(value)} onChange={() => onChangeHandler(value)} />
      ))}
    </div>
  );
};
