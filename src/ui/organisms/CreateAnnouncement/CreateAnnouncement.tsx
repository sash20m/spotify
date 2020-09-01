import * as React from 'react';
import { Icon, RichText, Button, Select } from 'ui/atoms';
import { Confirmation, Form, FormItem } from 'ui/organisms';

import './CreateAnnouncement.scss';

const options = [
  { value: 1, title: 'One' },
  { value: 2, title: 'Two' },
  { value: 3, title: 'Three' },
];

export const CreateAnnouncement: React.FC = () => (
  <Confirmation
    size="large"
    title="Crează anunț"
    onConfirm={(): null => null}
    contentClass="zh-create-announcement-content"
    content={
      <Form onSubmit={(): null => null}>
        <FormItem label="Țara">
          <Select placeholder="Selectați țara" options={options} />
        </FormItem>

        <FormItem label="Alegeți institutul" className="zh-create-announcement-multitool">
          <Select placeholder="Selectați institutul" options={options} />

          <div className="zh-create-announcement-select-all">
            <Icon type="check" />
            <span>Trimeite la toți</span>
          </div>
        </FormItem>

        <div className="zh-create-announcement-items">
          <FormItem label="Limba">
            <Select placeholder="Selectați limba" options={options} />
          </FormItem>

          <FormItem label="Rol" className="zh-create-announcement-multitool">
            <Select placeholder="Selectați rolul" options={options} />

            <div className="zh-create-announcement-select-all active">
              <Icon type="check" />
              <span>Toate rolurile</span>
            </div>
          </FormItem>
        </div>

        <FormItem label="Alegeți facultate" className="zh-create-announcement-multitool">
          <Select placeholder="Selectați facultate" options={options} />

          <div className="zh-create-announcement-select-all active">
            <Icon type="check" />
            <span>Toate facultățile</span>
          </div>
        </FormItem>

        <FormItem label="Descriere">
          <RichText onChange={console.log} />
        </FormItem>
      </Form>
    }
  >
    <Button type="invert" prefix={<Icon type="plus" />}>
      Crează anunț
    </Button>
  </Confirmation>
);
