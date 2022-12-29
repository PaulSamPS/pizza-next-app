import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import cx from 'clsx';
import styles from './ModalOverlay.module.scss';

interface OverlayingPopupProps extends React.AllHTMLAttributes<HTMLElement> {
  isOpened: boolean;
  position: 'center' | 'left' | 'right';
  setModal: (modal: boolean) => void;
}

const Portal = dynamic(() => import('@components/Blocks/Portal'), {
  ssr: false,
});

export const ModalOverlay = ({
  children,
  isOpened,
  position = 'center',
  setModal,
}: OverlayingPopupProps) => {
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <Portal>
      <AnimatePresence>
        {isOpened && (
          <div className={cx(styles.container, styles[position])}>
            <motion.div
              className={styles.overlay}
              onClick={() => setModal(false)}
              animate={isOpened ? 'open' : 'closed'}
              variants={variants}
              initial='closed'
              exit='closed'
              transition={{
                damping: 20,
                type: 'spring',
                stiffness: 250,
              }}
            />
            {children}
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
