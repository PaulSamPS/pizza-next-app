import React from 'react';
import { ModalOverlay } from '@components/Blocks';
import { motion } from 'framer-motion';
import styles from './ModalProductCustomizationMobile.module.scss';

interface ModalProductCustomizationProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  setModal: () => void;
  modal: boolean;
}

export const ModalProductCustomizationMobile = ({
  setModal,
  modal,
  children,
}: ModalProductCustomizationProps) => {
  const variantsModal = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: { opacity: 0, y: '100%' },
  };

  return (
    <ModalOverlay position='bottom' isOpened={modal} setModal={setModal}>
      <motion.div
        className={styles['modal-product-customizations']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </ModalOverlay>
  );
};
