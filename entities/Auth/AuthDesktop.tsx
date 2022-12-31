import React from 'react';
import { Icon, ModalOverlay } from '@components/Blocks';
import { CloseIcon32 } from '@helpers/icons/32';
import { motion } from 'framer-motion';
import styles from './AuthDesktop.module.scss';

type ModalAuthProps = {
  setModal: (modal: boolean) => void;
  modal: boolean;
  children: React.ReactNode;
};

export const AuthDesktop = ({ setModal, modal, children }: ModalAuthProps) => {
  const closeModal = () => {
    if (setModal) {
      setModal(false);
    }
  };

  const variantsModal = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <ModalOverlay position='center' isOpened={modal} setModal={setModal}>
      <motion.div
        className={styles['modal-auth']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{
          duration: 0.3,
        }}
      >
        <Icon className={styles['close-icon']} onClick={closeModal}>
          <CloseIcon32 />
        </Icon>
        <form className={styles.form}>{children}</form>
      </motion.div>
    </ModalOverlay>
  );
};
