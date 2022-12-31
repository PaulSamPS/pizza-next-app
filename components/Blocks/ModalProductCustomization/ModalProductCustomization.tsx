import React from 'react';
import { Icon, ModalOverlay } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import styles from './ModalProductCustomization.module.scss';

interface ModalProductCustomizationProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  setModal: (modal: boolean) => void;
  modal: boolean;
}

export const ModalProductCustomization = ({
  setModal,
  modal,
  children,
}: ModalProductCustomizationProps) => {
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
        className={styles['modal-product-customizations']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{
          duration: 0.4,
        }}
      >
        <Icon className={styles['close-icon']} onClick={closeModal}>
          <CloseIcon32 />
        </Icon>
        {children}
      </motion.div>
    </ModalOverlay>
  );
};
