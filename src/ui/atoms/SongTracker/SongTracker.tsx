import React, { useState, useEffect, useContext, useMemo } from 'react';
import { CurrentSongContext, IsPlayingContext } from 'contexts';

import { Range, getTrackBackground } from 'react-range';
import { playerFunctionality } from 'libs/playerFunctionality';
import { msToTime } from 'libs/time';

import './SongTracker.scss';

const STEP = 250;
const MIN = 0;

interface Props {
  max: number;
}

export const SongTracker: React.FC<Props> = ({ max }) => {
  const { isPlayingSong, setIsPlayingSong } = useContext(IsPlayingContext);
  const { currentSong } = useContext(CurrentSongContext);
  const [value, setValue] = useState<number[]>([0]);
  const [duration, setDuration] = useState(1);
  const [timer, setTimer] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isPlayingSong.status) {
        setTimer((timer) => {
          if (timer.seconds < 59) {
            return { ...timer, seconds: timer.seconds + 1 };
          } else
            return {
              minutes: timer.minutes + 1,
              seconds: 0,
            };
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isPlayingSong]);

  useEffect(() => {
    setDuration(max);
    setValue([0]);
    setTimer({
      minutes: 0,
      seconds: 0,
    });
  }, [currentSong, max]);

  useEffect(() => {
    if (value[0] >= duration) {
      setIsPlayingSong((prevState: any) => {
        return { ...prevState, finished: true };
      });
    }
  }, [value]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPlayingSong.status) {
        if (value[0] >= duration) {
          return;
        } else {
          setValue((value) => [value[0] + STEP]);
        }
      }
    }, STEP);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, isPlayingSong]);

  useEffect(() => {
    if (isPlayingSong.status) {
      localStorage.setItem('playerState', JSON.stringify({ timer, value }));
    }
  }, [value, timer, isPlayingSong]);

  useEffect(() => {
    const playerState = localStorage.getItem('playerState');
    if (playerState) {
      const state = JSON.parse(playerState);
      setValue(state.value);
      setTimer(state.timer);
    }
  }, []);

  const length = useMemo(() => msToTime(max).string, [max]);

  const adjustTimer = (ms: number): void => {
    const minutes = msToTime(ms).minutes;
    const seconds = msToTime(ms).seconds;

    setTimer({
      minutes,
      seconds,
    });
  };

  const onChange = (values: any): void => {
    setValue(values);
    playerFunctionality().seekPosition(values[0]);
    adjustTimer(values[0]);
  };

  return (
    <div className="tracker">
      <div className="timer">
        <p>{`${timer.minutes}:${timer.seconds < 9 ? `0${timer.seconds}` : timer.seconds}`}</p>
      </div>
      <Range
        values={value}
        step={STEP}
        min={MIN}
        max={duration}
        onChange={(values) => onChange(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="tracker__render"
            style={{
              ...props.style,
            }}
          >
            <div
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: value,
                  colors: ['#58B560', '#535353'],
                  min: MIN,
                  max: duration,
                }),
              }}
              className="tracker__render__bg"
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
            }}
            className="tracker__thumb"
          >
            <div className={`tracker__thumb__dragg ${isDragged ? 'blueBG' : 'greyBG'}`} />
          </div>
        )}
      />
      <div className="timer">
        <p>{length}</p>
      </div>
    </div>
  );
};
