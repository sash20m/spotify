import * as React from 'react';
import { save } from 'react-cookies';
import { useHistory } from 'estafette-router';
import { useRequest } from 'estafette';
import { useIntl } from 'estafette-intl';
import { useStateHandlers } from 'hooks';
import { axiosHeadersUpdater } from 'libs/http/axios';
import { Register } from 'libs/http/api/users';
import { phone } from 'libs/mask';
import { users, countries, cities } from 'libs/http/api/index';
import { Male, Female } from 'icons';
import { Input, Button, Select } from 'ui/atoms';
import { Form, FormItem } from 'ui/organisms';

import { Checkbox } from 'features/public/atoms';

import './Registration.scss';

export const Registration: React.FC = () => {
  const { push, location } = useHistory();
  const { t, locale } = useIntl();
  const [state, setState] = useStateHandlers({
    firstname: '',
    lastname: '',
    sex: 0,
    country: -1,
    city: -1,
    phone: { country: '', number: '' },
    email: '',
    institute: { country: -1, city: -1 },
    subscribe: false,
    agree: false,
    password: '',
    confirm_password: '',
    errors: {},
  });

  const { request: sendRegister, data: response, errors } = useRequest<Register>({ data: {} });

  React.useEffect(() => {
    if (response.access) {
      save('jwt-token', response.access, { path: '/' });
      save('jwt-refresh-token', response.refresh, { path: '/' });
      axiosHeadersUpdater();
      push('SessionsPage', { query: { logged: true } });
    }
  }, [response]);

  const { request: requestCountries, data: dataCountries } = useRequest({ data: [] });
  const { request: requestCities, data: dataCities } = useRequest({ data: [] });

  React.useEffect(() => {
    requestCountries(countries.get.action({ lang: locale }));
    requestCities(cities.get.action({ lang: locale }));
  }, []);

  React.useEffect(() => {
    setState({ errors });
  }, [errors]);
  const handleSubmit = (): void => {
    let sessionId: any;
    sessionId = false;

    if (location.search.length) {
      sessionId = location.search.split('=');
      if (Array.isArray(sessionId) && sessionId.length > 0) sessionId = parseInt(sessionId[1]);
    }

    sendRegister(
      users.register.action({
        country: state.country > -1 ? state.country : null,
        city: state.city > -1 ? state.city : null,
        first_name: state.firstname,
        last_name: state.lastname,
        email: state.email,
        gender: state.sex ? 'M' : 'F',
        phone_number: state.phone.country.replace(/[^-A-Z]/gim, '') + state.phone.number,
        password: state.password,
        confirm_password: state.confirm_password,
        session: sessionId ? sessionId : 0,
      }),
    );
  };

  const loadCountries = Array.isArray(dataCountries) && dataCountries.length ? false : true;
  const selectedCountry =
    state.country && Array.isArray(dataCountries)
      ? dataCountries.filter((country: { value: number }) => country.value === state.country)[0]
      : null;

  const checkError = (fields: string[]): number => {
    return Object.keys(state.errors).filter((error) => fields.indexOf(error) > -1).length ?? true;
  };
  const removeError = (field: string): object => {
    const stateError = { ...state.errors };
    Object.keys(state.errors).map((error) => {
      if (error === field) delete stateError[error];
      return error;
    });
    return stateError;
  };

  return (
    <Form onSubmit={handleSubmit} className="registerBlock">
      <FormItem
        required
        label={<h3>{t('personalData')}</h3>}
        className="groupFields"
        extra={checkError(['first_name', 'last_name']) ? t('blanks') : undefined}
      >
        <Input
          value={state.firstname}
          onChange={(value: string): void => setState({ firstname: value, errors: removeError('first_name') })}
          placeholder={t('firstName')}
        />
        <Input
          value={state.lastname}
          onChange={(value: string): void => setState({ lastname: value, errors: removeError('last_name') })}
          placeholder={t('lastName')}
        />
      </FormItem>

      <FormItem label={<h3>{t('sex')}</h3>} className="groupFields">
        <Checkbox
          icon={Female}
          useState={false}
          value={state.sex === 0}
          onChange={(): void => setState({ sex: 0 })}
          title={t('female')}
        />
        <Checkbox
          icon={Male}
          useState={false}
          value={state.sex === 1}
          onChange={(): void => setState({ sex: 1 })}
          title={t('male')}
        />
      </FormItem>
      <FormItem required label={<h3>{t('contactData')}</h3>} className="groupFields mb-10">
        <Select
          dropdownClassName="hideCheck"
          placeholder={t('country')}
          selected={state.country > -1 ? state.country : null}
          options={Array.isArray(dataCountries) ? dataCountries : []}
          onChange={(value: string): void => setState({ country: value, city: -1 })}
        />
        <Select
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
      </FormItem>
      <FormItem
        className="groupFields"
        extra={checkError(['country', 'city', 'phone_number', 'email']) ? t('blanks') : undefined}
      >
        <Input
          type="phone"
          loading={loadCountries}
          country={
            state.phone.country.length
              ? state.phone.country
              : selectedCountry
              ? selectedCountry.code.toUpperCase() + selectedCountry.phone[0]
              : null
          }
          countries={Array.isArray(dataCountries) ? dataCountries : []}
          value={state.phone.number}
          onChangeCountry={(value: string): void => setState({ phone: { ...state.phone, country: value } })}
          onChange={(value: string): void =>
            setState({ phone: { ...state.phone, number: phone(value), errors: removeError('phone_number') } })
          }
        />
        <Input
          value={state.email}
          onChange={(value: string): void => setState({ email: value, errors: removeError('email') })}
          placeholder={t('email')}
        />
      </FormItem>
      <FormItem label={<h3>{t('selectInstitute')}</h3>} className="groupFields">
        <Select
          dropdownClassName="hideCheck"
          placeholder={t('country')}
          selected={state.institute.country > -1 ? state.institute.country : null}
          options={Array.isArray(dataCountries) ? dataCountries : []}
          onChange={(value: number): void =>
            setState({ institute: { country: value, city: -1 }, errors: removeError('country') })
          }
        />
        <Select
          dropdownClassName="hideCheck"
          placeholder={t('city')}
          selected={state.institute.city > -1 ? state.institute.city : null}
          options={
            Array.isArray(dataCities)
              ? state.institute.country
                ? dataCities.filter((city) => city.countryID === state.institute.country)
                : []
              : []
          }
          onChange={(value: number): void => setState({ institute: { city: value }, errors: removeError('city') })}
        />
      </FormItem>
      <FormItem className="groupFields column">
        <Checkbox
          useState={false}
          value={state.subscribe}
          onChange={(): void => setState({ subscribe: !state.subscribe })}
          title={t('subscribe')}
        />
        <Checkbox
          useState={false}
          value={state.agree}
          onChange={(): void => setState({ agree: !state.agree })}
          title={t('agree')}
        />
      </FormItem>
      <FormItem className="groupFields" extra={checkError(['password', 'confirm_password']) ? t('blanks') : undefined}>
        <Input
          value={state.password}
          onChange={(value: string): void => setState({ password: value, errors: removeError('password') })}
          placeholder={t('password')}
        />
        <Input
          value={state.confirm_password}
          onChange={(value: string): void =>
            setState({ confirm_password: value, errors: removeError('confirm_password') })
          }
          placeholder={t('confirm_password')}
        />
      </FormItem>
      <FormItem className="actions border">
        <Button type="transparent" onClick={(): void => push('SessionsPage')}>
          {t('cancel')}
        </Button>
        <Button type="primary" submit>
          {t('continue')}
        </Button>
      </FormItem>
    </Form>
  );
};
