import React from 'react';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@shared/assets/icons/32';
import { Icon, ModalOverlay } from '@shared/ui/Blocks';
import styles from './ModalAuthDesktop.module.scss';

type ModalAuthProps = {
  setModal: () => void;
  modal: boolean;
  children: React.ReactNode;
};

export const ModalAuthDesktop = ({
  setModal,
  modal,
  children,
}: ModalAuthProps) => {
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
        <Icon className={styles['close-icon']} onClick={setModal}>
          <CloseIcon32 />
        </Icon>
        {children}
      </motion.div>
    </ModalOverlay>
  );
};
