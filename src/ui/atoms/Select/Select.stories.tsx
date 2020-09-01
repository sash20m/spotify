import * as React from 'react';
import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
};

const options = [
  { value: 1, title: 'One' },
  { value: 2, title: 'Two' },
  { value: 3, title: 'Three' },
];

export const regular = (): React.ReactElement => <Select options={options} />;

export const placeholder = (): React.ReactElement => <Select placeholder="Select a number .." options={options} />;
