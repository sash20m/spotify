import * as React from 'react';
import { Icon, Switch } from 'ui/atoms';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const regular = (): React.ReactElement => <Input value="" onChange={(): null => null} />;

export const placeholder = (): React.ReactElement => (
  <Input placeholder="Enter value .." value="" onChange={(): null => null} />
);

export const prefix = (): React.ReactElement => (
  <Input placeholder="Enter value .." value="" onChange={(): null => null} prefix={<Icon type="edit" />} />
);

export const suffix = (): React.ReactElement => (
  <Input placeholder="Enter value .." value="" onChange={(): null => null} suffix={<Icon type="edit" />} />
);

export const hasValue = (): React.ReactElement => (
  <Input value="Hey there!" onChange={(): null => null} prefix={<Icon type="edit" />} />
);

export const disabled = (): React.ReactElement => {
  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <Input value="Hey there!" onChange={(): null => null} prefix={<Icon type="edit" />} disabled={checked} />

      <div>
        <p />
        <p>disable:</p>
        <Switch checked={checked} onChange={setChecked} />
      </div>
    </div>
  );
};

export const prefixIsClickable = (): React.ReactElement => (
  <Input value="" onChange={(): null => null} prefix={<Icon type="edit" />} onClickPrefix={(): null => null} />
);

export const suffixIsClickable = (): React.ReactElement => (
  <Input value="" onChange={(): null => null} suffix={<Icon type="edit" />} onClickPrefix={(): null => null} />
);

export const typeText = (): React.ReactElement => <Input type="text" value="Your text is here" />;
