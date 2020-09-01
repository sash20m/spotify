import * as React from 'react';
import { Progressbar } from './Progressbar';

export default {
  title: 'Progressbar',
  component: Progressbar,
};

export const notFinished = (): React.ReactElement => <Progressbar finished={false} />;

export const finished = (): React.ReactElement => <Progressbar finished={false} />;

export const ThreeSecondsToGetFinished = (): React.ReactElement => {
  const [finished, setFinished] = React.useState<boolean>(false);
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    timer.current = setTimeout(() => setFinished(true), 3000);

    return (): void => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return <Progressbar finished={finished} />;
};
