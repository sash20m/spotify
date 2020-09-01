import * as React from 'react';
import { Avatar, Status, Button, Icon, Info } from 'ui/atoms';
import { SendMessage } from 'ui/organisms';

import './ProfileCard.scss';

interface Props {
  onSendMessage?: () => void;
  onEdit?: () => void;
}

export const ProfileCard: React.FC<Props> = ({ onSendMessage, onEdit }) => (
  <div className="zh-profile-card">
    <div className="zh-profile-card-item">
      <div className="zh-profile-card-avatar">
        <Avatar size="big" alt="Wladimir Zhosan" />

        <div className="zh-profile-card-avatar-details">
          <div className="zh-profile-card-avatar-title">Andrew Johnson</div>
          <div className="zh-profile-card-avatar-desc">Coordonator</div>
          <div className="zh-profile-card-avatar-status">
            <Status label="Activ" status="active" />
          </div>
        </div>
      </div>

      <div className="zh-profile-card-tools">
        {onSendMessage !== undefined && <SendMessage />}

        {onEdit !== undefined && (
          <Button prefix={<Icon type="edit" />} type="primary" onClick={onEdit}>
            Editează
          </Button>
        )}
      </div>
    </div>

    <div className="zh-profile-card-item">
      <div className="zh-profile-card-contacts">
        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">Telefon</div>
          <Info icon={<Icon type="phone" />} label="+373 69123456" />
        </div>

        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">E-mail</div>
          <Info icon={<Icon type="mail-filled" />} label="iask@gmai.com" />
        </div>

        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">Locația</div>
          <Info icon={<Icon type="location-filled" />} label="Calea Orheilui 113/2" />
        </div>
      </div>

      <div className="zh-profile-card-contacts">
        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">Telegram</div>
          <Info icon={<Icon type="telegram" />} label="t.me/lexeech" />
        </div>

        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">Skype</div>
          <Info icon={<Icon type="skype" />} label="iask" />
        </div>

        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">WhatsApp</div>
          <Info icon={<Icon type="whatsapp" />} label="N/A" />
        </div>
      </div>

      <div className="zh-profile-card-contacts">
        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">Data nașterii</div>
          <Info label="27.07.97" />
        </div>

        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">Sex</div>
          <Info icon={<Icon type={`gender-male`} />} label="Masculin" />
        </div>

        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">Limba maternă</div>
          <Info label="Russian" />
        </div>

        <div className="zh-profile-card-contact">
          <div className="zh-profile-card-contact-label">Limbi străine</div>
          <Info label="Romana, English" />
        </div>
      </div>

      <div className="zh-profile-card-networks">
        <div className="zh-profile-card-networks-title">Rețelele de socializare</div>

        <Info icon={<Icon type="facebook" />} label="Facebook" />
        <Info icon={<Icon type="vk" />} label="Vkontakte" />
      </div>
    </div>
  </div>
);
