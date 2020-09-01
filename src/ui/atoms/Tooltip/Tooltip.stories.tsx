import * as React from 'react';
import { Button } from 'ui/atoms';
import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const regular = (): React.ReactElement => (
  <Tooltip content={<span>Tooltip Test</span>}>
    <Button type="invert">Click</Button>
  </Tooltip>
);
