import * as React from 'react';
import { Time } from './Time';

export default {
  title: 'Time',
  component: Time,
};

export const regular = (): React.ReactElement => <Time date="2018-08-17T07:55:59.291461Z" />;

export const noParse = (): React.ReactElement => <Time date="Today" noParse />;

export const Loading = (): React.ReactElement => <Time date="Today" noParse loading />;
