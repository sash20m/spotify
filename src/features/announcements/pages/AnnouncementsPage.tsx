import * as React from 'react';
import { useIntl } from 'estafette-intl';
import { useStateHandlers } from 'hooks';
import { Announcements, CreateAnnouncement, Layout } from 'ui/organisms';
import { DateRangePicker } from 'ui/molecules';
import { Card, CardHeader, Icon, Input } from 'ui/atoms';

export const AnnouncementsPage: React.FC = () => {
  const { t } = useIntl();
  const [filter, setFilter] = useStateHandlers({
    search: '',
    period: {},
  });

  const onChangeSearch = (search: string): void => setFilter({ search });
  const onChangePeriod = (period: object): void => setFilter({ period });

  return (
    <Layout title="Anunțuri">
      <Card>
        <CardHeader
          title="Anunțuri (2)"
          leftSide={
            <Input
              prefix={<Icon type="search" />}
              placeholder="Căută după cuvânt cheie"
              value={filter.search}
              onChange={onChangeSearch}
              width={240}
              styleType="grey"
            />
          }
          rightSide={
            <>
              <div className="flex">
                {t('period')}

                <DateRangePicker onChange={onChangePeriod} />
              </div>

              <CreateAnnouncement />
            </>
          }
        />

        <Announcements />
      </Card>
    </Layout>
  );
};
