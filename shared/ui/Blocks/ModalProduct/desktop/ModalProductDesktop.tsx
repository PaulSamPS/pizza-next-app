import React from 'react';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@shared/assets/icons/32';
import { Icon, ModalOverlay } from '@shared/ui';
import styles from './ModalProductDesktop.module.scss';

interface ModalProductProps extends React.AllHTMLAttributes<HTMLDivElement> {
  setModal: () => void;
  modal: boolean;
}

export const ModalProductDesktop = ({
  setModal,
  modal,
  children,
}: ModalProductProps) => {
  const variantsModal = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <ModalOverlay position='center' isOpened={modal} setModal={setModal}>
      <motion.div
        className={styles['modal-product']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{
          duration: 0.4,
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
