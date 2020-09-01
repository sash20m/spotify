import * as React from 'react';
import { LoaderSpinner, Select } from 'ui/atoms';
import './Input.scss';

const types = ['phone', 'email', 'password'];

interface Props {
  type?: 'regular' | 'text' | 'phone' | 'email' | 'password' | 'daterange';
  value: string;
  onClick?: (e: any) => void;
  onChange?: (value: string) => void;
  onChangeCountry?: (value: string) => void;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  name?: string;
  country?: string;
  countries?: Array<{ value: number; phone: Array<number>; code: string }>;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  width?: number | string;
  styleType?: 'grey' | 'white' | 'transparent';
  className?: string;
}

export type Ref = any;

export const Input = React.forwardRef<Ref, Props>(
  (
    {
      type = 'regular',
      country,
      countries,
      name,
      onClick,
      onChange,
      onChangeCountry,
      value,
      prefix,
      suffix,
      loading,
      width,
      styleType = 'white',
      className = '',
      ...props
    },
    ref,
  ) => {
    const [codeList, setCodes] = React.useState([]);
    const hasOnChange = React.useMemo(() => onChange !== undefined, [onChange]);

    const onClickHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
      if (hasOnChange) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        onChange(target.value);
      }
    };

    const onClickPrefixHandler = (): void => {
      if (!loading && props.onClickPrefix !== undefined) {
        props.onClickPrefix();
      }
    };

    const onClickSuffixHandler = (): void => {
      if (!loading && props.onClickSuffix !== undefined) {
        props.onClickSuffix();
      }
    };

    React.useEffect(() => {
      if (!codeList.length && countries && countries.length) {
        const data = [] as any;
        countries.map((country) => {
          (country.phone as Array<number>).map((number: number) => {
            data.push({
              value: country.code.toUpperCase() + number,
              title: (
                <>
                  <div
                    className="zh-input-phone-country"
                    style={{ background: `url(${require(`icons/countries/${country.code}.svg`)})` }}
                  />
                  {number}
                </>
              ),
            });
            return number;
          });
          return country;
        });
        setCodes(data);
      }
    }, [countries]);

    return (
      <div
        className={`zh-input-wrapper 
      ${value === '' ? 'zh-input-empty' : ''} 
      zh-input-wrapper-${value ? 'active' : 'unactive'} 
      zh-input-style-${styleType} 
      zh-input-type-${type}${prefix !== undefined ? ' has-prefix' : ''}
      ${suffix !== undefined ? ' has-suffix' : ''}${props.disabled ? ' disabled' : ''} ${className}`}
      >
        {type === 'phone' && onChangeCountry && (
          <div className="zh-input-phone">
            <Select
              dropdownClassName="phone"
              className="transparent"
              selected={country || (!loading ? 'MD373' : '')}
              onChange={(value: string): void => onChangeCountry(value)}
              options={codeList}
            />
          </div>
        )}

        {loading || prefix ? (
          <div
            className={`zh-input-prefix ${
              !loading && props.onClickPrefix !== undefined ? 'clickable' : 'not-clickable'
            }`}
            onClick={onClickPrefixHandler}
          >
            {loading ? <LoaderSpinner size="small" /> : prefix}
          </div>
        ) : null}

        {suffix ? (
          <div
            className={`zh-input-suffix ${
              !loading && props.onClickPrefix !== undefined ? 'clickable' : 'not-clickable'
            }`}
            onClick={onClickSuffixHandler}
          >
            {loading && !prefix ? <LoaderSpinner size="small" /> : suffix}
          </div>
        ) : null}

        <div className="zh-input-container">
          <input
            name={name}
            ref={ref}
            type={types.indexOf(type) > -1 ? type : 'text'}
            className="zh-input"
            value={value}
            onChange={onClickHandler}
            placeholder={props.placeholder}
            disabled={props.disabled || loading || type === 'text'}
            onClick={onClick}
            readOnly={type === 'daterange'}
            style={{ minWidth: width }}
          />

          {type === 'phone' && (
            <span className="zh-input-mask">
              <i>__</i>
              _______
            </span>
          )}
        </div>
      </div>
    );
  },
);
