import * as React from 'react';
import { SendMessage } from './SendMessage';

export default {
  title: 'SendMessage',
  component: SendMessage,
};

export const regular = (): React.ReactNode => <SendMessage />;
