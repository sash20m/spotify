import * as React from 'react';
import { Confirmation, Form, FormItem } from 'ui/organisms';
import { Select, Button, RichText, Icon } from 'ui/atoms';

import './Report.scss';

const options = [
  { value: 1, title: 'One' },
  { value: 2, title: 'Two' },
  { value: 3, title: 'Three' },
];

export const Report: React.FC = () => (
  <Confirmation
    title="Raportare problemă"
    onConfirm={(): null => null}
    content={
      <Form className="zh-report" onSubmit={(): null => null}>
        <FormItem label="Tip problemă">
          <Select options={options} />
        </FormItem>

        <FormItem label="Mesaj">
          <RichText onChange={console.log} />
        </FormItem>
      </Form>
    }
  >
    <Button className="zh-report-button" prefix={<Icon type="warning" />}>
      Raportează problemă
    </Button>
  </Confirmation>
);
