import * as React from 'react';
import { useRequest } from 'estafette';
import { useIntl } from 'estafette-intl';
import { useStateHandlers } from 'hooks';
import { Input, Select, Button, Icon } from 'ui/atoms';
import { countries, cities, professors } from 'libs/http/api';

import './Searchbar.scss';

const defaultState = {
  name__contains: '',
  country: -1,
  city: -1,
  professor: -1,
};

interface Props {
  className?: string;
  onChange?: (state: object) => void;
}

export const Searchbar: React.FC<Props> = ({ className, onChange }) => {
  const [state, setState] = useStateHandlers(defaultState);
  const { t, locale } = useIntl();
  const handleSubmit = (): void => {
    if (state !== defaultState && onChange) onChange(state);
  };

  const { request: requestCountries, data: dataCountries } = useRequest({ data: [] });
  const { request: requestCities, data: dataCities } = useRequest({ data: [] });
  const { request: requestProfessors, data: dataProfessors } = useRequest({ data: [] });

  React.useEffect(() => {
    requestCountries(countries.get.action({ lang: locale }));
    requestCities(cities.get.action({ lang: locale }));
    requestProfessors(professors.get.action());
  }, []);

  return (
    <div className={`searchbar ${className}`}>
      <Input
        prefix={<Icon type="search" />}
        value={state.name__contains}
        onChange={(value: string): void => setState({ name__contains: value })}
        placeholder={t('rapidSearch')}
      />
      <Select
        label
        dropdownClassName="hideCheck"
        placeholder={t('country')}
        selected={state.country > -1 ? state.country : null}
        options={dataCountries}
        onChange={(value: number): void => setState({ country: value, city: -1 })}
      />
      <Select
        label
        dropdownClassName="hideCheck"
        placeholder={t('city')}
        selected={state.city > -1 ? state.city : null}
        options={
          Array.isArray(dataCities)
            ? state.country
              ? dataCities.filter((city) => city.countryID === state.country)
              : []
            : []
        }
        onChange={(value: number): void => setState({ city: value })}
      />
      <Select
        dropdownClassName="hideCheck phone"
        placeholder={t('selectProfessor')}
        selected={state.professor > -1 ? state.professor : null}
        options={dataProfessors}
        onChange={(value: number): void => setState({ professor: value })}
      />
      <Button type="primary" onClick={handleSubmit}>
        {t('apply')}
      </Button>
    </div>
  );
};
