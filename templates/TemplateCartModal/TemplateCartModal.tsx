import React from 'react';
import { ModalCart } from '@components/Blocks';
import { BasketCard } from '@entities';
import { useSelector } from 'react-redux';
import { basketState } from '@store/selector';

type TemplateCartModalProps = {
  setModal: () => void;
  modal: boolean;
};

export const TemplateCartModal = ({
  setModal,
  modal,
}: TemplateCartModalProps) => {
  const { basket } = useSelector(basketState);
  return (
    <ModalCart modal={modal} setModal={setModal}>
      {basket &&
        basket.products.map((p, index) => (
          // eslint-disable-next-line no-underscore-dangle
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
