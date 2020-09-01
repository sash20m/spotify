import * as React from 'react';
import { Input, Icon, RichText, Button, AvatarInline } from 'ui/atoms';
import { Confirmation, Form, FormItem } from 'ui/organisms';

import './SendMessage.scss';

export const SendMessage: React.FC = () => (
  <Confirmation
    title="Trimite mesaj"
    onConfirm={(): null => null}
    contentClass="zh-send-message-content"
    content={
      <Form onSubmit={(): null => null}>
        <div className="zh-send-message-content-item">
          <FormItem label={<span className="uppercase">Mesaj pentru</span>}>
            <AvatarInline alt="Vladimir Josan" />
          </FormItem>
        </div>

        <div className="zh-send-message-content-item">
          <FormItem label="Subiect">
            <Input value="" onChange={console.log} />
          </FormItem>

          <FormItem label="Mesaj">
            <RichText onChange={console.log} />
          </FormItem>
        </div>
      </Form>
    }
  >
    <Button className="zh-send-message-button" prefix={<Icon type="mail" />}>
      Trimite mesaj
    </Button>
  </Confirmation>
);
