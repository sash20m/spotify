import * as React from 'react';
import { RichText } from './RichText';

export default {
  title: 'RichText',
  component: RichText,
};

export const regular = (): React.ReactElement => {
  return <RichText onChange={console.log} />;
};

export const withInitialValue = (): React.ReactElement => {
  return <RichText onChange={console.log} initialValue="<p>Testovoi</p>" />;
};
