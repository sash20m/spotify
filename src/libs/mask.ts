export const phone = (value: string): string => {
  value = value.substring(0, 11).replace(/\D/g, '');

  if (value.length == 0) {
    value = '';
  } else if (value.length <= 2) {
    value = value.replace(/^(\d{0,2})/, '($1)');
  } else {
    value = value.replace(/^(\d{0,2})(.*)/, '($1) $2');
  }

  return value;
};
