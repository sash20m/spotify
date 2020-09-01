import * as React from 'react';
import { Button, Icon, Switch } from 'ui/atoms';
import { Modal, ModalFooterButton } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const withNothing = (): React.ReactElement => <Modal>Example</Modal>;

export const withTitle = (): React.ReactElement => <Modal title="Confirmă acceptare">Example</Modal>;

export const withHeaderAndFooter = (): React.ReactElement => (
  <Modal
    title="Confirmă acceptare"
    footer={
      <ModalFooterButton>
        <Button>Refuză</Button>

        <Button type="primary" prefix={<Icon type="check" />}>
          Confirmă
        </Button>
      </ModalFooterButton>
    }
  >
    Example
  </Modal>
);

export const cancelWithEscape: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const onToggleHandler = (): void => setOpen((s) => !s);

  return (
    <>
      <p>
        Toggle: <Switch checked={open} onChange={onToggleHandler} />
      </p>

      {open && (
        <Modal
          onClose={onToggleHandler}
          title="Confirmă acceptare"
          footer={
            <ModalFooterButton>
              <Button onClick={onToggleHandler}>Refuză</Button>

              <Button type="primary" prefix={<Icon type="check" />}>
                Confirmă
              </Button>
            </ModalFooterButton>
          }
        >
          Example
        </Modal>
      )}
    </>
  );
};
