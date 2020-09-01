import * as React from 'react';
import { format } from 'libs/date';
import { Info, Icon } from 'ui/atoms';

interface Props {
  loading?: boolean;
  date: string;
  format?: string;
  noParse?: boolean;
}

export const Time: React.FC<Props> = ({ loading, date, format: $format, noParse }) => (
  <Info loading={loading} icon={<Icon type="clock" />} label={noParse ? date : format(date, $format)} />
);
