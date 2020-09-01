export const number = (value: number): number | string => (typeof value === 'number' ? value.toLocaleString() : value);
