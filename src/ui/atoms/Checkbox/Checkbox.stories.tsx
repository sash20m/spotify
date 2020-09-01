import * as React from 'react';
import { Checkbox, CheckboxGroup } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const regular = (): React.ReactElement => <Checkbox label="Yes" />;

const options = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

export const group = (): React.ReactElement => (
  <CheckboxGroup options={options} values={['yes']} onChange={console.log} />
);
