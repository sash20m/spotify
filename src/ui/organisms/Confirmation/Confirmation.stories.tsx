import * as React from 'react';
import { Button } from 'ui/atoms';
import { Confirmation } from './Confirmation';

export default {
  title: 'Confirmation',
  component: Confirmation,
};

export const regular = (): React.ReactNode => (
  <Confirmation onConfirm={(): null => null}>
    <Button>Submit</Button>
  </Confirmation>
);
