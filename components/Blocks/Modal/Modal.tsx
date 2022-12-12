import React, { MouseEvent } from 'react';
import { Icon } from '@components/Blocks';
import { CloseIcon32 } from '@helpers/icons/32';
import cx from 'clsx';
import styles from './Modal.module.scss';

interface ModalProps extends React.AllHTMLAttributes<HTMLElement> {
  setModal?: (modal: boolean) => void;
  open: boolean;
}

export const Modal = ({ children, setModal, open }: ModalProps) => {
  const closeModal = () => {
    if (setModal) {
      setModal(false);
    }
  };

  const clickModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={cx(styles['fixed-overlay'], open && styles.open)}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={cx(styles.modal, open && styles.open)}
        onClick={clickModal}
      >
        <div className={styles.container}>
          <Icon className={styles['close-icon']} onClick={closeModal}>
            <CloseIcon32 />
          </Icon>
          {children}
        </div>
      </div>
    </div>
  );
};
