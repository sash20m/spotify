import * as React from 'react';
import { useHistory } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { useStateHandlers } from 'hooks';
import { Roadmap, SortBy } from 'ui/organisms';
import { DateRangePicker } from 'ui/molecules';
import { Button, Input, Icon, Info, Card, CardHeader, CardFooter, Calendar } from 'ui/atoms';
import { EventLayout } from '../../organisms';

import './EventsPage.scss';

const data = [
  {
    title:
      'Ședință și sesiunile de nivelul II și training, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
    date: '22 iunie 2020, 19:00',
    language: 'Română',
    location: 'Moldova, Chișinău, Bd. Ștefan cel Mare și Sfânt 105',
    type: 'Sesiune',
    course: 'Chimie',
    professor: 'Filat Vasile, Vasile Diaconu',
  },
  {
    title:
      'Ședință și sesiunile de nivelul II și training, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
    date: '22 iunie 2020, 19:00',
    language: 'Română',
    location: 'Moldova, Chișinău, Bd. Ștefan cel Mare și Sfânt 105',
    type: 'Sesiune',
    course: 'Chimie',
    professor: 'Filat Vasile, Vasile Diaconu',
  },
];

export const EventsPage: React.FC = () => {
  const { push } = useHistory();
  const { t } = useIntl();
  const [state, setState] = useStateHandlers({
    filters: {
      sortBy: '',
    },
    myFilters: {
      sortBy: '',
    },
  });

  const onAddEvent = (): void => push('AddEventsPage');

  return (
    <EventLayout breadcrumbs={[{ label: 'List' }]}>
      <Card>
        <CardHeader
          title="Invites (2)"
          leftSide={
            <Input
              placeholder="Search by keyword"
              value=""
              onChange={(): null => null}
              suffix={<Icon type="search" />}
            />
          }
          rightSide={
            <>
              <div className="flex">
                <div className="hideOnSmallTablet">{t('period')}</div>
                <DateRangePicker
                  onChange={(stateFilter): void => setState({ filters: { ...state.filters, ...stateFilter } })}
                />
              </div>
              <div>
                <SortBy value={state.filters.sortBy} onChange={(value) => setState({ filters: { sortBy: value } })} />
                <Button type="invert" prefix={<Icon type="add" />} onClick={onAddEvent}>
                  Add event
                </Button>
              </div>
            </>
          }
        />

        <div className="flex-data">
          {data.map((item, i) => (
            <div className="flex-item" key={i}>
              <div className="flex-item-row">
                <div className="flex-item-row-col column">
                  <label>Invite</label>
                  <Info primary label={item.title} />
                </div>
                <div className="flex-item-row-col">
                  <div>
                    <label>Date and time</label>
                    <Info label={item.date} />
                  </div>
                  <div>
                    <label>Language</label>
                    <Info primary label={item.language} />
                  </div>
                  <div>
                    <label>Location</label>
                    <Info icon={<Icon type="pin" />} label={item.location} />
                  </div>
                </div>
                <div className="flex-item-row-col">
                  <div>
                    <label>Type of event</label>
                    <Info label={item.type} />
                  </div>
                  <div>
                    <label>Course</label>
                    <Info label={item.course} />
                  </div>
                  <div>
                    <label>Professor</label>
                    <Info primary icon={<Icon type="user-strict" />} label={item.professor} />
                  </div>
                </div>
              </div>
              <div className="flex-item-actions">
                <Button prefix={<Icon type="close" />}>Reject</Button>
                <Button type="primary" prefix={<Icon type="check" />}>
                  Accept
                </Button>
              </div>
            </div>
          ))}
        </div>

        <CardFooter
          currentLabel={'invitații'}
          onRefresh={(): null => null}
          current={10}
          total={32}
          rightSide={
            <Button className="zh-card-btn">
              Vezi toate <Icon type="arrow-right-strict" />
            </Button>
          }
        />
      </Card>
      <Card>
        <CardHeader
          title="Evenimentele mele (2)"
          leftSide={
            <Input
              placeholder="Search by keyword"
              value=""
              onChange={(): null => null}
              suffix={<Icon type="search" />}
            />
          }
          rightSide={
            <>
              <div className="flex">
                <div className="hideOnSmallTablet">{t('period')}</div>
                <DateRangePicker
                  onChange={(stateFilter): void => setState({ filters: { ...state.filters, ...stateFilter } })}
                />
              </div>
              <div>
                <SortBy
                  value={state.myFilters.sortBy}
                  onChange={(value) => setState({ myFilters: { sortBy: value } })}
                />
              </div>
            </>
          }
        />
        <Roadmap
          data={[
            {
              target: 'Iunie 2020',
              children: (
                <div className="flex-item flex-item-map">
                  <div className="flex-item-actions">
                    <Calendar date="2018-08-17T07:55:59.291461Z" type="date-time" />
                  </div>
                  <div className="flex-item-row">
                    <div className="flex-item-row-col column">
                      <label>Invite</label>
                      <Info
                        primary
                        label={
                          'Ședință și sesiunile de nivelul II și training, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                        }
                      />
                    </div>
                    <div className="flex-item-row-col">
                      <div>
                        <label>Date and time</label>
                        <Info label={'22 iunie 2020, 19:00'} />
                      </div>
                      <div>
                        <label>Language</label>
                        <Info primary label={'Română'} />
                      </div>
                      <div>
                        <label>Location</label>
                        <Info
                          icon={<Icon type="pin" />}
                          label={'Moldova, Chișinău, Bd. Ștefan cel Mare și Sfânt 105'}
                        />
                      </div>
                    </div>
                    <div className="flex-item-row-col">
                      <div>
                        <label>Type of event</label>
                        <Info label={'Sesiune'} />
                      </div>
                      <div>
                        <label>Course</label>
                        <Info label={'Chimie'} />
                      </div>
                      <div>
                        <label>Professor</label>
                        <Info primary icon={<Icon type="user-strict" />} label={'Filat Vasile, Vasile Diaconu'} />
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </EventLayout>
  );
};
