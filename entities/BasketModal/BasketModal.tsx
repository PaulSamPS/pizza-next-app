import React from 'react';
import { DeviceContext } from '@shared/context';
import { ModalOverlay } from '@shared/ui';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import {
  basketModalState,
  basketState,
  userState,
} from '@shared/store/selector';
import { CloseButton } from '@features';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@shared/hooks';
import { setBasketModalIsOpened } from '@shared/store/slices/basketModal.slice';
import desktop from './desktop/BasketModalDesktop.module.scss';
import mobile from './mobile/BasketModalMobile.module.scss';
import { BasketModalMobile } from './mobile';
import { BasketModalDesktop } from './desktop';
import { BasketModalCard } from './ui';

export const BasketModal = () => {
  const { isDesktop } = React.useContext(DeviceContext);
  const { basket } = useSelector(basketState);
  const router = useRouter();
  const { user } = useSelector(userState);
  const { basketModalIsOpened } = useSelector(basketModalState);
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(setBasketModalIsOpened(false));
  };

  const linkTo = user.phone ? '/basket' : `${router.pathname}?auth=login`;

  const variantsModal = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  if (isDesktop) {
    return (
      <ModalOverlay
        position='right'
        isOpened={basketModalIsOpened}
        setModal={closeModal}
      >
        <motion.div
          className={desktop['modal-cart']}
          animate={basketModalIsOpened ? 'open' : 'closed'}
          variants={variantsModal}
          initial='closed'
          exit='closed'
          transition={{
            duration: 0.3,
          }}
        >
          <BasketModalDesktop
            closeModal={closeModal}
            closeButton={<CloseButton />}
            basket={basket}
            linkTo={linkTo}
          >
            {basket &&
              basket.products.map((p, index) => (
                <BasketModalCard
                  key={index}
                  product={p.product}
                  pizza={p.pizza}
                  dough={p.dough}
                  price={p.price}
                  qty={p.qty}
                  size={p.size}
                  item={p}
                />
              ))}
          </BasketModalDesktop>
        </motion.div>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay
      position='right'
      isOpened={basketModalIsOpened}
      setModal={closeModal}
    >
      <motion.div
        className={mobile['modal-cart']}
        animate={basketModalIsOpened ? 'open' : 'closed'}
        variants={variantsModal}
        initial='closed'
        exit='closed'
        transition={{
          duration: 0.3,
        }}
      >
        <BasketModalMobile
          closeModal={closeModal}
          closeButton={<CloseButton />}
          basket={basket}
          linkTo={linkTo}
        >
          {basket &&
            basket.products.map((p, index) => (
              <BasketModalCard
                key={index}
                product={p.product}
                pizza={p.pizza}
                dough={p.dough}
                price={p.price}
                qty={p.qty}
                size={p.size}
                item={p}
              />
            ))}
        </BasketModalMobile>
      </motion.div>
    </ModalOverlay>
  );
};
