import * as React from 'react';
import { Tooltip, Icon } from 'ui/atoms';

import './Actions.scss';

interface Props {
  onEdit?: () => void;
  onEditLabel?: string;

  onDelete?: () => void;
  onDeleteLabel?: string;

  onAccept?: () => void;
  onAcceptLabel?: string;

  onConfirm?: () => void;
  onConfirmLabel?: string;

  onSendToConfirm?: () => void;
  onSendToConfirmLabel?: string;

  onCancel?: () => void;
  onCancelLabel?: string;
}

export const Actions: React.FC<Props> = ({
  onEdit,
  onEditLabel,

  onDelete,
  onDeleteLabel,

  onAccept,
  onAcceptLabel,

  onConfirm,
  onConfirmLabel,

  onSendToConfirm,
  onSendToConfirmLabel,

  onCancel,
  onCancelLabel,
}) => (
  <Tooltip
    placement="bottom"
    className="zh-action-tooltip"
    content={
      <>
        <div className="zh-action-tooltip-title">Acțiuni</div>

        <div className="zh-action-tooltip-items">
          {onEdit !== undefined && (
            <div className="zh-action-tooltip-item" onClick={onEdit}>
              {onEditLabel || 'Editează'}
            </div>
          )}

          {onDelete !== undefined && (
            <div className="zh-action-tooltip-item" onClick={onDelete}>
              {onDeleteLabel || 'Șterge'}
            </div>
          )}

          {onAccept !== undefined && (
            <div className="zh-action-tooltip-item" onClick={onAccept}>
              {onAcceptLabel || 'Acceaptă'}
            </div>
          )}

          {onConfirm !== undefined && (
            <div className="zh-action-tooltip-item" onClick={onConfirm}>
              {onConfirmLabel || 'Confirmare finală'}
            </div>
          )}

          {onSendToConfirm !== undefined && (
            <div className="zh-action-tooltip-item" onClick={onSendToConfirm}>
              {onSendToConfirmLabel || 'Trimite spre confirmare'}
            </div>
          )}

          {onCancel !== undefined && (
            <div className="zh-action-tooltip-item" onClick={onCancel}>
              {onCancelLabel || 'Respinge'}
            </div>
          )}
        </div>
      </>
    }
  >
    <Icon type="dots" className="zh-action-tooltip-icon" />
  </Tooltip>
);
