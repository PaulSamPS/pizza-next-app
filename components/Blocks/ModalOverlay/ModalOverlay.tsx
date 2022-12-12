import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './ModalOverlay.module.scss';

interface OverlayingPopupProps extends React.AllHTMLAttributes<HTMLElement> {
  isOpened: boolean;
}

const Portal = dynamic(() => import('@components/Blocks/Portal'), {
  ssr: false,
});

export const ModalOverlay = ({ children, isOpened }: OverlayingPopupProps) => {
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <Portal>
      <AnimatePresence>
        {isOpened && (
          <div className={styles.container}>
            <motion.div
              className={styles.overlay}
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
