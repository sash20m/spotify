import * as React from 'react';
import { Content } from 'features/public/atoms';

export default {
  title: 'Content',
  component: Content,
};

export const regular = (): React.ReactElement => <Content>Example</Content>;
