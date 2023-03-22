import React from 'react';
import { motion } from 'framer-motion';
import { CloseIcon32 } from '@shared/assets/icons/32';
import Link from 'next/link';
import { useAppDispatch } from '@shared/hooks';
import { useSelector } from 'react-redux';
import { basketState } from '@shared/store/selector';
import { setBasketModalIsOpened } from '@shared/store/slices/basketModal.slice';
import { Bottom, Divider, Icon, ModalOverlay, Title } from '@shared/ui';
import styles from './ModalCartDesktop.module.scss';

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
  const { basket } = useSelector(basketState);

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
            <Bottom
              totalPrice={basket?.totalPrice!}
              className={styles.bot}
              handleClick={() => {}}
            >
              Оформить заказ
            </Bottom>
          </Link>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};
