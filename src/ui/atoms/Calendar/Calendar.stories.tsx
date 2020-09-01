import * as React from 'react';
import { Calendar } from './Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
};

export const date = (): React.ReactElement => <Calendar date="2018-08-17T07:55:59.291461Z" type="date" />;

export const dateAndTime = (): React.ReactElement => <Calendar date="2018-08-17T07:55:59.291461Z" type="date-time" />;

export const time = (): React.ReactElement => <Calendar date="2018-08-17T07:55:59.291461Z" type="time" />;
