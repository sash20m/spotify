import * as React from 'react';
import { useIntl } from 'estafette-intl';
import { Button } from 'ui/atoms';

import './Pagination.scss';

interface Props {
  total?: number;
  label?: string;
  current?: number;
  onChange?: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ total = 0, label = '', current = 1, onChange }) => {
  const [page, setPage] = React.useState(current);
  const { t } = useIntl();
  const disabledPreview = current === 1;
  const disabledNext = current === Math.ceil(total / 10);

  const onPageChange = (dir: number): void => {
    if (dir && !disabledNext) {
      setPage(page + 1);
    } else if (!disabledPreview) {
      setPage(page - 1);
    }
  };

  React.useEffect(() => {
    if (onChange) onChange(page);
  }, [page]);

  return (
    <div className="pagination flex flex-between">
      <div>
        {total > 10 ? 10 : total} {label} din {total}
      </div>
      <div className="pagination-buttons">
        <Button onClick={() => onPageChange(0)} disabled={disabledPreview}>
          {t('preview')}
        </Button>
        <Button onClick={() => onPageChange(1)} disabled={disabledNext}>
          {t('next')}
        </Button>
      </div>
    </div>
  );
};
