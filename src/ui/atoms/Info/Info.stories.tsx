import * as React from 'react';
import { Icon } from 'ui/atoms';
import { Info } from './Info';

export default {
  title: 'Info',
  component: Info,
};

export const hasIcon = (): React.ReactElement => <Info icon={<Icon type="student" />} label="Vladimir Zhosan" />;

export const loadingWithIcon = (): React.ReactElement => (
  <Info icon={<Icon type="student" />} label="Vladimir Zhosan" loading />
);

export const loadingWithOutIcon = (): React.ReactElement => <Info label="Vladimir Zhosan" loading />;
