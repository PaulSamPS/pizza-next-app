import React from 'react';
import { ModalCart } from '@shared/ui/Blocks';
import { BasketCard } from '@entities';
import { useSelector } from 'react-redux';
import { basketModalState, basketState } from '@shared/store/selector';
import { useAppDispatch } from '@shared/hooks';
import { setBasketModalIsOpened } from '@shared/store/slices/basketModal.slice';

export const TemplateCartModal = () => {
  const { basket } = useSelector(basketState);
  const { basketModalIsOpened } = useSelector(basketModalState);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(setBasketModalIsOpened(false));
  };

  return (
    <ModalCart modal={basketModalIsOpened} setModal={closeModal}>
      {basket &&
        basket.products.map((p, index) => (
          <BasketCard
            key={index}
            product={p.product}
            pizza={p.pizza}
            dough={p.dough}
            price={p.price}
            qty={p.qty}
            size={p.size}
          />
        ))}
    </ModalCart>
  );
};
