import * as React from 'react';
import { Counter } from '../Counter/Counter';

import './Progressbar.scss';

interface Props {
  finished: boolean;
}

export const Progressbar: React.FC<Props> = ({ finished }) => {
  const [percentage, setPercentage] = React.useState<number>(0);
  const interval = React.useRef<NodeJS.Timeout>();
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    interval.current = setInterval(() => {
      setPercentage((prevPercentage) => {
        let newPercentage = Number(`${prevPercentage}`);

        if (newPercentage < 80) {
          newPercentage += Math.floor(Math.random() * 10 + 1);
        }

        if (interval.current !== undefined && newPercentage >= 80) {
          clearInterval(interval.current);
        }

        return newPercentage;
      });
    }, 150);

    return (): void => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }

      if (interval.current !== undefined) {
        clearInterval(interval.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (finished) {
      setPercentage(100);

      if (interval.current !== undefined) {
        clearInterval(interval.current);
      }
    }
  }, [finished]);

  return (
    <div className="zh-progressbar">
      <div className="zh-progressbar-percentage">
        <Counter total={percentage} />%
      </div>

      <div className="zh-progressbar-bar">
        <div
          style={{ width: `${percentage}%` }}
          className={`zh-progressbar-bar-line${percentage >= 25 ? ' over-25' : ''}${
            percentage >= 50 ? ' over-50' : ''
          }${percentage >= 75 ? ' over-75' : ''}`}
        />
      </div>
    </div>
  );
};
