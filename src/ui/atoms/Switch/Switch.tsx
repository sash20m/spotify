import * as React from 'react';
import { Icon } from 'ui/atoms';

import './Switch.scss';

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export const Switch: React.FC<Props> = ({ checked, onChange }) => {
  const onClickHandler = (): void => onChange(!checked);

  return (
    <div className={`zh-switch zh-switch-${checked ? 'checked' : 'unchecked'}`} onClick={onClickHandler}>
      {checked && <div className="zh-switch-checked-sheet" />}

      <div className="zh-switch-dot">
        <Icon type="check" />

        <Icon type="cancel" />
      </div>
    </div>
  );
};
