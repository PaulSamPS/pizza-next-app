import React from 'react';
import { Icon, ModalOverlay } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import { Title } from '@components/Typography';
import styles from './ModalCart.module.scss';

interface ModalCartProps extends React.AllHTMLAttributes<HTMLDivElement> {
  setModal: (modal: boolean) => void;
  modal: boolean;
}

export const ModalCart = ({ setModal, modal, children }: ModalCartProps) => {
  const closeModal = () => {
    if (setModal) {
      setModal(false);
    }
  };

  const variantsModal = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  return (
    <ModalOverlay position='right' isOpened={modal}>
      <motion.div
        className={styles['modal-cart']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{
          damping: 20,
          type: 'spring',
          stiffness: 250,
        }}
      >
        <Title level='2'>Ваш заказ</Title>
        <Icon className={styles['close-icon']} onClick={closeModal}>
          <CloseIcon32 />
        </Icon>
        {children}
      </motion.div>
    </ModalOverlay>
  );
};
