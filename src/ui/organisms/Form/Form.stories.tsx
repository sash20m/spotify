import * as React from 'react';
import { Input } from 'ui/atoms';
import { Form, FormItem, FormItems } from './Form';

export default {
  title: 'Form',
  component: Form,
};

export const regular = (): React.ReactNode => (
  <Form onSubmit={(): null => null}>
    <FormItem label="Text">
      <Input value="" onChange={console.log} />
    </FormItem>

    <FormItem label="Text" extra="This field is required">
      <Input value="" onChange={console.log} />
    </FormItem>

    <FormItems>
      <FormItem label="Text">
        <Input value="" onChange={console.log} />
      </FormItem>

      <FormItem label="Text" extra="This field is required">
        <Input value="" onChange={console.log} />
      </FormItem>
    </FormItems>
  </Form>
);
