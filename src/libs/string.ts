export const firstLetters = (target: string): string =>
  target
    ? target
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substr(0, 2)
    : '';
