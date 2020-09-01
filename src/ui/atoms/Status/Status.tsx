import * as React from 'react';

import './Status.scss';

interface Props {
  status: string;
  label?: string;
}

export const getStatus = ($status: string): string => {
  const status = $status.toLowerCase();

  if (['active', 'success'].includes(status)) {
    return 'active';
  }

  if (['unactive'].includes(status)) {
    return 'unactive';
  }

  return 'regular';
};

export const Status: React.FC<Props> = ({ status: $status = 'regular', label }) => {
  const status = React.useMemo(() => getStatus($status), [$status]);

  return <div className={`zh-status zh-status-type-${status}`}>{label}</div>;
};
