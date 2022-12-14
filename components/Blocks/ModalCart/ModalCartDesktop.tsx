import React from 'react';
import { Bottom, Divider, Icon, ModalOverlay } from '@components/Blocks';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@helpers/icons/32';
import { Title } from '@components/Typography';
import Link from 'next/link';
import { useAppDispatch } from '@hooks';
import styles from './ModalCartDesktop.module.scss';
import { setBasketModalIsOpened } from '../../../store/slices/basketModal.slice';

interface ModalCartDesktopProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  setModal: () => void;
  modal: boolean;
}

export const ModalCartDesktop = ({
  setModal,
  modal,
  children,
}: ModalCartDesktopProps) => {
  const dispatch = useAppDispatch();

  const handleCloseBasketModal = () => {
    dispatch(setBasketModalIsOpened(false));
  };

  const variantsModal = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  return (
    <ModalOverlay position='right' isOpened={modal} setModal={setModal}>
      <motion.div
        className={styles['modal-cart']}
        animate={modal ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{
          duration: 0.3,
        }}
      >
        <div className={styles.top}>
          <Title level='2'>Ваш заказ</Title>
          <Icon className={styles['close-icon']} onClick={setModal}>
            <CloseIcon32 />
          </Icon>
        </div>
        <div className={styles.items}>{children}</div>
        <div className={styles.bottom}>
          <Divider />
          <Link href='/basket' onClick={handleCloseBasketModal}>
            <Bottom totalPrice={555} className={styles.bot}>
              Оформить заказ
            </Bottom>
          </Link>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};
