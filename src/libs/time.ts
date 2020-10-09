export const msToTime = (
  millis: number,
): {
  string: string;
  minutes: number;
  seconds: number;
} => {
  let seconds = Math.floor(millis / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  minutes = minutes % 60;

  const conditionalSeconds = seconds === 0 ? '00' : seconds < 10 ? `0${seconds}` : seconds;

  return { string: `${minutes}:${conditionalSeconds}`, minutes, seconds };
};
