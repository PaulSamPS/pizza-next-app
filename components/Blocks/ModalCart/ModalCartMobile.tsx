import React from 'react';
import { motion } from 'framer-motion';
import { Title } from '@components/Typography';
import { Bottom, Divider, Icon, ModalOverlay } from '@components/Blocks';
import { CloseIcon32 } from '@helpers/icons/32';
import Link from 'next/link';
import { useAppDispatch } from '@hooks';
import styles from './ModalCartMobile.module.scss';
import { setBasketModalIsOpened } from '../../../store/slices/basketModal.slice';

interface ModalCartMobileProps extends React.AllHTMLAttributes<HTMLDivElement> {
  setModal: () => void;
  modal: boolean;
}

const ModalCartMobile = ({
  setModal,
  modal,
  children,
}: ModalCartMobileProps) => {
  const dispatch = useAppDispatch();

  const handleCloseBasketModal = () => {
    dispatch(setBasketModalIsOpened(false));
  };

  const variantsModal = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  return (
    <ModalOverlay isOpened={modal} position='center' setModal={setModal}>
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

export default ModalCartMobile;
