import React, { useEffect, useRef, useState } from 'react';
import AnimateHeight from 'react-animate-height';

interface Props {
  startFrom?: string;
  debounce?: number;
  duration?: number;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactElement;
  height?: number | string;
}

export const Animated: React.FC<Props> = ({
  startFrom = '0%',
  debounce = 0,
  duration = 500,
  className = '',
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return (): void => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    const onStopLoading = (): void => {
      if (!props.loading) {
        if (debounce) {
          timer.current = setTimeout(() => setLoading(false), debounce);
        } else {
          setLoading(false);
        }
      }
    };

    onStopLoading();
  }, [props.loading]);

  if (props.disabled) {
    return props.children;
  }

  return (
    <AnimateHeight duration={duration} height={props.height || loading ? startFrom : 'auto'} className={className}>
      {props.children}
    </AnimateHeight>
  );
};
