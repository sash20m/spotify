import * as React from 'react';
import Checkbox from 'rc-checkbox';
import './Checkbox.scss';

const activeClass = 'checked';

interface Props {
  title?: string;
  icon?: any;
  value?: boolean;
  useState?: boolean;
  onChange?: (value: boolean) => void;
}

export const Сheck: React.FC<Props> = ({ icon, title, value = false, useState = true, onChange }) => {
  const [check, setCheck] = React.useState(value);
  const checked = useState ? (check ? activeClass : '') : value ? activeClass : '';
  const handleChange = (): void => {
    if (onChange !== undefined) onChange(!check);
    if (useState) setCheck(!check);
  };

  return (
    <div className={`checkbox-wrapper ${icon ? 'icon' : ''} ${checked}`} onClick={handleChange}>
      {icon && (
        <div className="prefix">
          <img src={icon} />
        </div>
      )}
      <Checkbox prefixCls="checkbox" checked={useState ? check : value} />
      <label>{title}</label>
    </div>
  );
};
