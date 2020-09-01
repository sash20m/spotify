import * as React from 'react';
import { Form, FormItem, FormItems } from 'ui/organisms';
import { Avatar, Button, Input, Icon, Select } from 'ui/atoms';

import './EditAccount.scss';

const options = [
  { value: 1, title: 'One' },
  { value: 2, title: 'Two' },
  { value: 3, title: 'Three' },
];

export const EditAccount: React.FC = () => {
  const [preview, setPreview] = React.useState<string>('');

  const onUploadFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = ({ target }) => target && target.result !== null && setPreview(target.result as string);

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (): void => {
    console.log('hit submit');
  };

  return (
    <div className="zh-edit-account">
      <div className="zh-edit-account-left">
        <h2>Date personale</h2>

        <Form onSubmit={onSubmit}>
          <FormItems>
            <FormItem label="Nume">
              <Input styleType="grey" value="" />
            </FormItem>

            <FormItem label="Prenume">
              <Input styleType="grey" value="" />
            </FormItem>
          </FormItems>

          <FormItems>
            <FormItem flex label="Data nașterii">
              <Input styleType="grey" value="" />
              <Input styleType="grey" value="" />
              <Input styleType="grey" value="" />
            </FormItem>

            <FormItem label="Sex">
              <Select styleType="grey" placeholder="Selectați" options={options} />
            </FormItem>
          </FormItems>

          <FormItems>
            <FormItem label="Limba maternă">
              <Select styleType="grey" placeholder="Selectați limba" options={options} />
            </FormItem>

            <FormItem label="Limbii străine (Cunosc)">
              <Select styleType="grey" placeholder="Selectați limbile străine" options={options} />
            </FormItem>
          </FormItems>

          <h2>Locația</h2>
          <FormItems>
            <FormItem label="Țara">
              <Select styleType="grey" placeholder="Selectați țara" options={options} />
            </FormItem>

            <FormItem label="Oraș">
              <Select styleType="grey" placeholder="Selectați oraș" options={options} />
            </FormItem>
          </FormItems>

          <FormItem label="Adresa completă (Strada, nr casa, nr apartament, cod poștal)">
            <Input styleType="grey" value="" />
          </FormItem>

          <h2>Date de contact</h2>
          <FormItems>
            <FormItem flex label="E-mail">
              <Input styleType="grey" value="" />
            </FormItem>

            <FormItem flex label="Telefon">
              <Input styleType="grey" value="" placeholder="+373" />
            </FormItem>
          </FormItems>

          <h2>Alte contacte</h2>
          <FormItems>
            <FormItem flex label="Telegram">
              <Input styleType="grey" value="" />
            </FormItem>

            <FormItem flex label="Skype">
              <Input styleType="grey" value="" />
            </FormItem>
          </FormItems>

          <FormItems>
            <FormItem flex label="WhatsApp">
              <Input styleType="grey" value="" />
            </FormItem>

            <FormItem flex label="Viber">
              <Input styleType="grey" value="" />
            </FormItem>
          </FormItems>

          <h2>Rețelele de socializare</h2>
          <FormItems>
            <FormItem flex label="Facebook">
              <Input styleType="grey" value="" />
            </FormItem>

            <FormItem flex label="Vkontakte">
              <Input styleType="grey" value="" />
            </FormItem>
          </FormItems>

          <FormItems>
            <FormItem flex label="Odnoklassniki">
              <Input styleType="grey" value="" />
            </FormItem>

            <FormItem flex label="Linkedin">
              <Input styleType="grey" value="" />
            </FormItem>
          </FormItems>
        </Form>
      </div>

      <div className="zh-edit-account-right">
        <div className="zh-upload">
          <input type="file" className="zh-upload-mask" onChange={onUploadFile} />

          <Avatar img={preview} alt="Vladimir Josan" size="big" />

          <div className="zh-upload-info">
            <div className="zh-upload-title">Încărcați fotografia</div>
            <div className="zh-upload-desc">
              Dimensiunea maximă a fișierului e 20 mb, formatele acceptate sunt: PNG, JPG, TIFF, GIF, BMP
            </div>

            <Button prefix={<Icon type="img-add" />} type="invert">
              Adăugați fotografie
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
