import React, { MouseEvent } from 'react';
import styles from './Modal.module.scss';

interface ModalProps extends React.AllHTMLAttributes<HTMLElement> {
  setModal: (modal: boolean) => void;
}

export const Modal = ({ children, setModal }: ModalProps) => {
  const closeModal = () => {
    setModal(false);
  };

  const clickModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={styles['fixed-overlay']} onClick={closeModal}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={styles.modal} onClick={clickModal}>
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};
