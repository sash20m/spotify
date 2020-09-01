import * as React from 'react';
import { createPortal } from 'react-dom';
import { Mask } from 'ui/atoms';

import './Modal.scss';

export type ModalSize = 'regular' | 'large';

interface Props {
  size?: ModalSize;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  noPadding?: boolean;
  className?: string;
  contentClass?: string;
  title?: string;
}

export const Modal: React.FC<Props> = ({
  size = 'regular',
  header,
  footer,
  className = '',
  contentClass = '',
  title,
  ...props
}) => {
  React.useEffect(() => {
    const event = ({ key }: React.KeyboardEvent): void => {
      if (['Escape'].includes(key) && props.onClose !== undefined) {
        props.onClose();
      }
    };

    window.addEventListener<any>('keydown', event);

    return (): void => {
      window.removeEventListener<any>('keydown', event);
    };
  }, []);

  const onClickOutside = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const target = ev.target as HTMLDivElement;

    if (target && target.classList.contains('zh-modal-wrapper') && props.onClose !== undefined) {
      props.onClose();
    }
  };

  return createPortal(
    <>
      <Mask />

      <div className={`zh-modal-wrapper ${className || ''}`} onClick={onClickOutside}>
        <div className={`zh-modal zh-modal-size-${size}`}>
          {header || title ? (
            <div className="zh-modal-header">
              {title && <h2 className="zh-modal-title">{title}</h2>}

              <div className="zh-modal-header-tool">{header}</div>
            </div>
          ) : null}

          <ModalContent noPadding={props.noPadding} className={contentClass}>
            {props.children}
          </ModalContent>

          {footer && <div className="zh-modal-footer">{footer}</div>}
        </div>
      </div>
    </>,

    document.getElementById('root') as HTMLElement,
  );
};

export const ModalContent: React.FC<{ noPadding?: boolean; className?: string }> = ({
  noPadding,
  className = '',
  children,
}) =>
  !noPadding ? (
    <div className={`zh-modal-content ${className}`}>{children}</div>
  ) : (
    <div className={className}>{children}</div>
  );

export const ModalFooterButton: React.FC<{ align?: 'center' }> = ({ align = 'center', children }) => (
  <div className={`zh-modal-footer-button zh-modal-footer-button-${align}`}>{children}</div>
);
