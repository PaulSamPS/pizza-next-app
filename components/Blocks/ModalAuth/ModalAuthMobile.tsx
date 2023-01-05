import React from 'react';
import { Icon, ModalOverlay } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import styles from './ModalAuthMobile.module.scss';

type ModalAuthPMobileProps = {
  setModal: () => void;
  modal: boolean;
  children: React.ReactNode;
};

export const ModalAuthMobile = ({
  setModal,
  modal,
  children,
}: ModalAuthPMobileProps) => {
  const variantsModal = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '100%' },
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
