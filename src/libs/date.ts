// eslint-disable-next-line import/default
import dayjs from 'dayjs';

export const dateFormat = 'YYYY-MM-DD';
export const dateTimeFormat = 'YYYY-MM-DDD HH:MM';

export const format = (date: string, format?: string): string => {
  return dayjs(date).format(format || dateFormat);
};

export const getMonth = (date: string): string => dayjs(date).format('MMM');
export const getDay = (date: string): string => dayjs(date).format('D');
export const getTime = (date: string): string => dayjs(date).format('HH:mm');
