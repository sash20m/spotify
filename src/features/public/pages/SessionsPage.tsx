import * as React from 'react';
import { useHistory } from 'estafette-router';
import { useRequest } from 'estafette';
import { useIntl } from 'estafette-intl';
import { UserContext } from 'contexts';
import { useStateHandlers } from 'hooks';
import { Content } from 'features/public/atoms';
import { Searchbar } from 'features/public/molecules';
import { Public } from 'features/public/organisms';
import { Loader, Table, Button, Icon, Info } from 'ui/atoms';
import { Column } from 'ui/atoms/Table/Table';
import { Pagination, DateRangePicker } from 'ui/molecules';
import { sessions } from 'libs/http/api';
import { Session } from 'libs/http/api/sessions';

interface Sessions {
  count: number;
  current_page: number;
  results: [];
}

export default (): React.ReactElement => {
  const auth = React.useContext(UserContext);
  const { push } = useHistory();
  const { t } = useIntl();
  const { request, data: response, loading } = useRequest<Sessions>();
  const [state, setState] = useStateHandlers({
    id: 0,
    filters: {},
    page: 1,
    mobile: false,
  });

  React.useEffect(() => {
    request(sessions.get.action({ ...state.filters, page: state.page }));
  }, [state.filters, state.page]);

  React.useEffect(() => {
    const onResize = (): void => setState({ mobile: window.innerWidth < 900 });

    onResize();

    window.addEventListener('resize', onResize);

    return (): void => window.removeEventListener('resize', onResize);
  }, []);

  const handleSubmit = (): void => {
    if (auth.logged) {
      // login in Dashboard
    } else {
      push('SignUpPage', { query: { session: state.id } });
    }
  };

  const columns: Column<Session>[] = [
    {
      title: t('course'),
      render: ({ course, professor }) => (
        <div className="colInfo">
          <b>{course}</b>
          <Info icon={<Icon type="user-public" />} label={`${professor.first_name} ${professor.last_name}`} />
        </div>
      ),
    },
    {
      title: t('group'),
      width: 200,
      render: ({ name, country, city }) => (
        <div className="colInfo">
          <b>{name}</b>
          <Info icon={<Icon type="pin" />} label={`${country}, ${city}`} />
        </div>
      ),
    },
    {
      title: t('startAt'),
      width: 130,
    },
    {
      title: t('finishAt'),
      width: 130,
    },
    {
      title: '',
      width: 280,
      render: ({ id }) => (
        <Button type={id === state.id ? 'primary' : 'border'} onClick={(): void => setState({ id: id })}>
          {t('registerSession')}
        </Button>
      ),
    },
  ];

  const onCancel = (): void => push('SessionsPage');
  const onChangePage = (page: number): void => setState({ page });

  return (
    <Public>
      <Content className={`container ${state.mobile ? 'responsive' : ''}`}>
        <Searchbar onChange={(stateFilter): void => setState({ filters: { ...state.filters, ...stateFilter } })} />

        <hr className="hr" />

        <div className="container" style={{ margin: 0, border: 0 }}>
          <div className="flex flex-between">
            <h3 style={{ margin: 0 }}>{t('sessionsList')}</h3>

            <div className="flex">
              {t('period')}

              <DateRangePicker
                onChange={(stateFilter): void => setState({ filters: { ...state.filters, ...stateFilter } })}
              />
            </div>
          </div>

          <hr />
        </div>

        <Loader loading={loading} height={loading ? undefined : 0}>
          <Table columns={columns} data={response.results} />
        </Loader>

        {response.count > 10 && (
          <Pagination
            label={t('sessions').toLocaleLowerCase()}
            total={response.count}
            current={response.current_page}
            onChange={onChangePage}
          />
        )}

        <div className="actions">
          <Button type="transparent" onClick={onCancel}>
            {t('cancel')}
          </Button>

          <Button type="primary" onClick={handleSubmit}>
            {t('continue')}
          </Button>
        </div>
      </Content>
    </Public>
  );
};
