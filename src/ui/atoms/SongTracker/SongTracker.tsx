import React, { ReactElement, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import './SongTracker.scss';

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

export const SongTracker = (): ReactElement => {
  const [value, setValue] = useState<number[]>([0]);

  return (
    <div className="tracker">
      <Range
        values={value}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValue(values)}
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
                  max: MAX,
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
    </div>
  );
};
