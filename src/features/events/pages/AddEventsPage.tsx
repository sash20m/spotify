import * as React from 'react';
// import { useIntl } from 'estafette-intl';
// import { useStateHandlers } from 'hooks';
import { Form, FormItems, FormItem } from 'ui/organisms';
import { Card, CardHeader, Input, Select, Button, Icon } from 'ui/atoms';
import { EventLayout } from '../organisms';

export const AddEventsPage: React.FC = () => {
  // const { t } = useIntl();
  /* const [state, setState] = useStateHandlers({
    example: '',
  }); */

  const onChange = (value: any): void => {
    console.log('value', value);
  };
  const handleSubmit = (): void => console.log('submit');

  return (
    <EventLayout breadcrumbs={[{ label: 'Adauga eveniment' }]}>
      <Card>
        <CardHeader title="Adaugă eveniment" />
        <Form onSubmit={handleSubmit}>
          <FormItem>
            <FormItem required label={<h4>{'Tipul evenimentului'}</h4>}>
              <Select placeholder={'Selectati tip evenimentului'} options={[]} onChange={onChange} />
            </FormItem>
            <FormItem required label={<h4>{'Denumirea evenimentului'}</h4>}>
              <Input value={''} />
            </FormItem>
            <FormItem required label={<h4>{'Limba predării'}</h4>}>
              <Select placeholder={'Selectati limba'} options={[]} onChange={onChange} />
            </FormItem>
          </FormItem>

          <hr />

          <FormItem flex label={<h3>{'Data si ora inceperii'}</h3>}>
            <FormItem flex label={'Data inceperii'}>
              <FormItems>
                <FormItem>
                  <Select placeholder={'Ziua'} options={[]} onChange={onChange} />
                </FormItem>
                <FormItem>
                  <Select placeholder={'Luna'} options={[]} onChange={onChange} />
                </FormItem>
                <FormItem>
                  <Select placeholder={'Anul'} options={[]} onChange={onChange} />
                </FormItem>
              </FormItems>
            </FormItem>
            <FormItem flex label={'Ora inceperii'}>
              <FormItems>
                <FormItem>
                  <Select placeholder={'Ore'} options={[]} onChange={onChange} />
                </FormItem>
                <FormItem>
                  <Select placeholder={'Minute'} options={[]} onChange={onChange} />
                </FormItem>
              </FormItems>
            </FormItem>
          </FormItem>

          <FormItem flex label={<h3>{'Data si ora inchierii'}</h3>}>
            <FormItem flex label={'Data inchierii'}>
              <FormItems>
                <FormItem>
                  <Select placeholder={'Ziua'} options={[]} onChange={onChange} />
                </FormItem>
                <FormItem>
                  <Select placeholder={'Luna'} options={[]} onChange={onChange} />
                </FormItem>
                <FormItem>
                  <Select placeholder={'Anul'} options={[]} onChange={onChange} />
                </FormItem>
              </FormItems>
            </FormItem>
            <FormItem flex label={'Ora inchierii'}>
              <FormItems>
                <FormItem>
                  <Select placeholder={'Ore'} options={[]} onChange={onChange} />
                </FormItem>
                <FormItem>
                  <Select placeholder={'Minute'} options={[]} onChange={onChange} />
                </FormItem>
              </FormItems>
            </FormItem>
          </FormItem>

          <hr />

          <FormItem label={<h3>{'Locul desfasuraii'}</h3>}>
            <FormItem label={<h4>{'Tara'}</h4>}>
              <Select placeholder={'Selectati tara'} options={[]} onChange={onChange} />
            </FormItem>
            <FormItem required label={<h4>{'Adresa completa (Strada, nr casa, nr apartament, cod postal)'}</h4>}>
              <Input value={''} />
            </FormItem>
          </FormItem>

          <hr />

          <FormItem required label={<h4>{'Manualul care va fi studiat'}</h4>}>
            <Select options={[]} onChange={onChange} />
          </FormItem>

          <FormItems>
            <FormItem flex>
              <FormItem label={<h4>{'Profesorul'}</h4>}>
                <Select placeholder={'Selectati profesor'} options={[]} onChange={onChange} />
              </FormItem>
              <FormItem label={<h4>{'Organizatorul'}</h4>}>
                <Select placeholder={'Selectati organizatorul'} options={[]} onChange={onChange} />
              </FormItem>
            </FormItem>
          </FormItems>

          <hr />

          <FormItems>
            <FormItem flex label={<h3>{'Date de contact'}</h3>}>
              <FormItem required label={<h4>{'E-mail'}</h4>}>
                <Input value={''} />
              </FormItem>
              <FormItem flex required label={<h4>{'Telefon'}</h4>}>
                <Input value={''} placeholder={'+373'} />
              </FormItem>
            </FormItem>
          </FormItems>

          <hr />

          <FormItem label={<h3>{'Alte contacte'}</h3>}>
            <FormItems>
              <FormItem flex>
                <FormItem label={<h4>{'Telegram'}</h4>}>
                  <Input value={''} />
                </FormItem>
                <FormItem label={<h4>{'Skype'}</h4>}>
                  <Input value={''} />
                </FormItem>
              </FormItem>
            </FormItems>
            <FormItems>
              <FormItem flex>
                <FormItem label={<h4>{'WhatsApp'}</h4>}>
                  <Input value={''} />
                </FormItem>
                <FormItem label={<h4>{'Viber'}</h4>}>
                  <Input value={''} />
                </FormItem>
              </FormItem>
            </FormItems>
          </FormItem>

          <hr />

          <FormItem label={<h3>{'Retelele de socializare'}</h3>}>
            <FormItems>
              <FormItem flex>
                <FormItem label={<h4>{'Facebook'}</h4>}>
                  <Input value={''} />
                </FormItem>
                <FormItem label={<h4>{'Vkontakte'}</h4>}>
                  <Input value={''} />
                </FormItem>
              </FormItem>
            </FormItems>
            <FormItems>
              <FormItem flex>
                <FormItem label={<h4>{'Odnoklassniki'}</h4>}>
                  <Input value={''} />
                </FormItem>
                <FormItem label={<h4>{'Linkedin'}</h4>}>
                  <Input value={''} />
                </FormItem>
              </FormItem>
            </FormItems>
          </FormItem>

          <hr />

          <FormItem label={<h4>{'Alte informatii'}</h4>}>
            <textarea placeholder={'Alta informatie'}></textarea>
          </FormItem>
        </Form>
        <div className="zh-form-actions flex flex-center">
          <Button>{'Anulare'}</Button>
          <Button type="primary" prefix={<Icon type="check" />}>
            {'Confirma'}
          </Button>
        </div>
      </Card>
    </EventLayout>
  );
};
