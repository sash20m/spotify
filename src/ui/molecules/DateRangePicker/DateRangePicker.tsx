import * as React from 'react';
import { createPortal } from 'react-dom';
import { useIntl } from 'estafette-intl';
import DayPicker, { DateUtils } from 'react-day-picker';
import { useStateHandlers } from 'hooks';
import { format } from 'libs/date';
import { Input, Icon } from 'ui/atoms/index';

import 'react-day-picker/lib/style.css';
import './DateRangePicker.scss';

let portalEl = document.getElementById('portal') as HTMLElement;

if (!portalEl) {
  portalEl = document.createElement('div');
  portalEl.id = 'portal';

  document.body.appendChild(portalEl);
}

const pickerEl = document.createElement('div');

pickerEl.className = 'picker-container';

interface Props {
  className?: string;
  onChange?: (state: object) => void;
}

export const DateRangePicker: React.FC<Props> = ({ className = '', onChange }) => {
  const { t, locale } = useIntl();
  const ref = React.useRef<HTMLInputElement>();
  const [state, setState] = useStateHandlers({
    from: '',
    to: '',
    open: false,
    inputEl: {},
    created: false,
  });
  const { from, to } = state;
  const modifiers = { start: from, end: to };
  const resize = (): void => {
    if (ref.current) {
      const inputEl = ref.current.getBoundingClientRect();
      const middle = window.innerWidth - inputEl.left + window.scrollX;
      pickerEl.style.top = `${inputEl.top + window.scrollY}px`;
      pickerEl.style.left = `${inputEl.left + window.scrollX}px`;
      if (middle <= 292) pickerEl.style.marginLeft = `-${inputEl.width - 45}px`;
      else pickerEl.style.marginLeft = '0';
    }
  };

  const click = (e: any): void => {
    e.stopPropagation();
    const match = e.path
      ? e.path.filter((item: HTMLInputElement) => item.id === 'portal' || item.name === 'daterange')
      : [];
    setState({ open: match.length > 0 });
  };

  React.useEffect(() => {
    if (state.open) {
      window.addEventListener('click', click);

      return (): void => window.removeEventListener('click', click);
    }
  }, [state.open]);

  React.useEffect(() => {
    window.addEventListener('resize', resize);

    return (): void => window.removeEventListener('resize', resize);
  }, []);

  React.useEffect(() => {
    if (!state.created) {
      portalEl.appendChild(pickerEl);
      setState({ created: true });
    }

    if (state.open) {
      pickerEl.style.display = 'flex';
      resize();
    } else {
      pickerEl.style.display = 'none';
    }
  }, [state.open]);

  React.useEffect(() => {
    if (onChange) {
      if (state.from) onChange({ start_date__gte: format(state.from) });
      if (state.to) onChange({ end_date__gte: format(state.to) });
    }
  }, [state.from, state.to]);

  const getTranslate = (name: string): any => (t(name) !== name ? JSON.parse(t(name)) : null);
  const MONTHS = getTranslate('MONTHS');
  const WEEKDAYS_LONG = getTranslate('WEEKDAYS_LONG');
  const WEEKDAYS_SHORT = getTranslate('WEEKDAYS_SHORT');

  const onClick = (e: Event): void => {
    e.stopPropagation();
    setState({ open: true });
  };
  const onChangeFrom = (value: string): void => setState({ from: value });
  const onChangeTo = (value: string): void => setState({ to: value });
  const onDayClick = (day: Date): void => {
    setState(DateUtils.addDayToRange(day, { from: from, to: to }));
  };

  return (
    <div className={`picker-label ${state.open ? 'open' : ''} ${className}`}>
      <Input
        ref={ref}
        name="daterange"
        type="daterange"
        placeholder={t('startAt')}
        onClick={onClick}
        prefix={<Icon type="calendar" />}
        value={state.from}
        onChange={onChangeFrom}
      />
      <Input
        ref={ref}
        name="daterange"
        type="daterange"
        placeholder={t('finishAt')}
        onClick={onClick}
        prefix={<Icon type="calendar" />}
        value={state.to}
        onChange={onChangeTo}
      />
      {createPortal(
        state.open && (
          <DayPicker
            locale={locale}
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            className="Selectable"
            numberOfMonths={2}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            pagedNavigation
            fixedWeeks
            onDayClick={onDayClick}
          />
        ),
        pickerEl,
      )}
    </div>
  );
};
