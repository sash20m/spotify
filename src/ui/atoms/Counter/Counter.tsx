import * as React from 'react';
import { number } from 'libs/number';

export const Counter: React.FC<{ total: number }> = ({ total }) => {
  const [counter, setCounter] = React.useState<number>(0);
  const step = React.useMemo(() => Math.ceil(total / 300), [total]);

  React.useEffect(() => {
    if (typeof total === 'number') {
      if (counter < total && total - step > counter) {
        setCounter((prevCounter) => prevCounter + step);
      } else {
        setCounter(total);
      }
    }
  }, [total, counter]);

  return <span>{number(counter)}</span>;
};
