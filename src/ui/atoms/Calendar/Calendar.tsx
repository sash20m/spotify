import * as React from 'react';
import { getMonth, getDay, getTime } from 'libs/date';

import './Calendar.scss';

interface Props {
  date: string;
  type?: 'date' | 'date-time' | 'time';
}

export const Calendar: React.FC<Props> = ({ type = 'date-time', date }) => {
  const [month, day, time] = React.useMemo(() => [getMonth(date), getDay(date), getTime(date)], [date]);

  return (
    <div className={`zh-calendar zh-calendar-type-${type}`}>
      {type === 'date-time' || type === 'date' ? (
        <div className="zh-calendar-date">
          <span className="zh-calendar-month">{month}</span>

          <span className="zh-calendar-day">{day}</span>
        </div>
      ) : null}

      {type === 'time' || type === 'date-time' ? <div className="zh-calendar-time">{time}</div> : null}
    </div>
  );
};
