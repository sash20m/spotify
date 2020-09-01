import * as React from 'react';
import { Button, ButtonGroup } from './Button';
import { Icon } from '../';

export default {
  title: 'Button',
  component: Button,
};

export const regular = (): React.ReactElement => <Button>Example</Button>;

export const primary = (): React.ReactElement => <Button type="primary">Example</Button>;

export const invert = (): React.ReactElement => <Button type="invert">Example</Button>;

export const prefix = (): React.ReactElement => (
  <Button type="invert" prefix={<Icon type="edit" />}>
    Example
  </Button>
);

export const group = (): React.ReactElement => (
  <ButtonGroup>
    <Button prefix={<Icon type="edit" />}>Example 1</Button>

    <Button type="invert" prefix={<Icon type="edit" />}>
      Example 2
    </Button>

    <Button type="primary">Example 3</Button>
  </ButtonGroup>
);

export const loadingWithPrefix = (): React.ReactElement => (
  <Button type="invert" prefix={<Icon type="edit" />} loading>
    Example
  </Button>
);

export const loadingWithOutPrefix = (): React.ReactElement => (
  <Button type="invert" loading>
    Example
  </Button>
);
