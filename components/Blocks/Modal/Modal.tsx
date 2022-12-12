import React, { MouseEvent } from 'react';
import { Icon } from '@components/Blocks';
import { CloseIcon32 } from '@helpers/icons/32';
import { AnimatePresence, motion } from 'framer-motion';
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

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const variantsModal = {
    open: { opacity: 1, y: '-50%', x: '-50%' },
    closed: { opacity: 0, y: '-100%', x: '-50%' },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles['fixed-overlay']}
          animate={open ? 'open' : 'closed'}
          variants={variants}
          initial='closed'
          exit='closed'
          transition={{
            damping: 20,
            type: 'spring',
            stiffness: 250,
          }}
        >
          <motion.div
            className={styles.modal}
            onClick={clickModal}
            animate={open ? 'open' : 'closed'}
            variants={variantsModal}
            initial='closed'
            exit='closed'
            transition={{
              damping: 20,
              type: 'spring',
              stiffness: 250,
            }}
          >
            <div className={styles.container}>
              <Icon className={styles['close-icon']} onClick={closeModal}>
                <CloseIcon32 />
              </Icon>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
