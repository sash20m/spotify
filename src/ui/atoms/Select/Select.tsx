import * as React from 'react';
import { useIntl } from 'estafette-intl';
import SelectOld, { Option } from 'rc-select';
import 'rc-select/assets/index.less';

import './Select.scss';

export interface Option {
  value: any;
  title: any;
}

interface Props {
  dropdownClassName?: string;
  className?: string;
  placeholder?: string;
  selected?: string;
  onChange?: (value: any) => void;
  options: any;
  label?: boolean;
  styleType?: 'grey' | 'white';
}

export const Select: React.FC<Props> = ({
  dropdownClassName = '',
  className = '',
  label,
  selected = null,
  options,
  onChange,
  styleType = 'white',
  ...props
}) => {
  const { t } = useIntl();

  return (
    <div className={`select${!selected ? ' select-empty' : ''}`}>
      {label && <label>{props.placeholder}</label>}

      <SelectOld
        dropdownClassName={dropdownClassName}
        className={`select-style-${styleType} ${className}`}
        placeholder={!label ? props.placeholder : t('notSelected')}
        value={selected}
        onChange={onChange}
      >
        {options.map((option: { value: number | string; title: string }) => (
          <Option key={option.value} value={option.value}>
            {option.title}
          </Option>
        ))}
      </SelectOld>
    </div>
  );
};
