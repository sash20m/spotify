import * as React from 'react';
import { Status } from './Status';

export default {
  title: 'Status',
  component: Status,
};

export const regular = (): React.ReactElement => <Status status="regular" label="Regular" />;

export const active = (): React.ReactElement => <Status status="active" label="Active" />;
