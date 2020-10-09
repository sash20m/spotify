import React, { ReactElement, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { playerFunctionality } from 'libs/playerFunctionality';

import './VolumeController.scss';

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

export const VolumeController: React.FC = (): ReactElement => {
  const [value, setValue] = useState<number[]>([100]);

  const onChange = (values: number[]): void => {
    setValue(values);
    playerFunctionality().setVolume(Math.round(values[0]));
  };

  return (
    <div className="volume-controller">
      <Range
        values={value}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => onChange(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="volume-controller__render"
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
              className="volume-controller__render__bg"
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
            className="volume-controller__thumb"
          >
            <div className={`volume-controller__thumb__dragg ${isDragged ? 'blueBG' : 'greyBG'}`} />
          </div>
        )}
      />
    </div>
  );
};
