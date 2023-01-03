import React, { TouchEvent } from 'react';
import { Icon, ModalOverlay } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import { HomeIndicatorIcon } from '@helpers/icons';
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
  const [touchMove, setTouchMove] = React.useState(0);
  const variantsModal = {
    open: {
      opacity: 1,
      y: touchMove <= 5 ? 0 : Math.floor(touchMove),
    },
    closed: { opacity: 0, y: '100%' },
  };

  const handeTouchMove = (e: TouchEvent<HTMLElement>) => {
    setTouchMove(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchMove > 500) {
      setModal();
      setTimeout(() => setTouchMove(0), 500);
    } else {
      setTouchMove(0);
    }
  };

  return (
    <ModalOverlay
      position='bottom'
      isOpened={modal}
      setModal={setModal}
      opacity={touchMove / 1000}
    >
      <motion.div
        className={styles['modal-product-customizations']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{ duration: 0.2 }}
      >
        <Icon className={styles['close-icon']} onClick={setModal}>
          <CloseIcon32 />
        </Icon>
        <Icon
          className={styles.home}
          onTouchMove={(e) => handeTouchMove(e)}
          onTouchEnd={handleTouchEnd}
        >
          <HomeIndicatorIcon />
        </Icon>
        {children}
      </motion.div>
    </ModalOverlay>
  );
};
