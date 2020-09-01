import * as React from 'react';
import { Modal, ModalFooterButton, Button, Icon } from 'ui/atoms';
import { ModalSize } from 'ui/atoms/Modal/Modal';

import './Confirmation.scss';

interface Props {
  size?: ModalSize;
  title?: string;
  type?: string;
  onConfirm: () => void;
  disabled?: boolean;
  text?: string;
  children: React.ReactElement;
  content?: React.ReactNode;
  contentClass?: string;
}

export const Confirmation: React.FC<Props> = ({
  size,
  content,
  contentClass = '',
  title,
  type,
  children,
  onConfirm,
  disabled,
  text: $text,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [visible, setVisibility] = React.useState(false);

  React.useEffect(() => {
    let text = '';
    if (type === 'logout') {
      text = 'Are you sure you want to log out?';
    } else if (type === 'download') {
      text = 'Are you sure you want to download?';
    } else if (type === 'delete') {
      text = 'Are you sure you want to delete?';
    } else {
      text = 'Are you sure you want to complete this action?';
    }

    if ($text) {
      text = $text;
    }

    setText(text);
  }, [type, $text]);

  const onConfirmHandler = async (): Promise<void> => {
    setLoading(true);
    await onConfirm();
    setLoading(false);
  };

  const onClose = (): void => setVisibility(false);

  const onOpenModal = (): void => setVisibility(true);

  if (!onConfirm) {
    return children;
  }

  if (!children) {
    return null;
  }

  return (
    <>
      {React.cloneElement(children, { onClick: onOpenModal })}

      {visible && !disabled && (
        <Modal
          contentClass={`zh-confirmation-content ${contentClass}`}
          onClose={onClose}
          title={title || 'Confirmă acceptare'}
          size={size}
          footer={
            <ModalFooterButton>
              <Button onClick={onClose} disabled={loading}>
                Refuză
              </Button>

              <Button type="primary" prefix={<Icon type="check" />} onClick={onConfirmHandler} loading={loading}>
                Confirmă
              </Button>
            </ModalFooterButton>
          }
        >
          {content || (
            <>
              <Icon type="alert" size="big" />

              <h2>Atenție!</h2>

              <p>{text}</p>
            </>
          )}
        </Modal>
      )}
    </>
  );
};
