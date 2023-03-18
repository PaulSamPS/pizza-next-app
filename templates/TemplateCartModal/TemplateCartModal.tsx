import React from 'react';
import { ModalCart } from '@shared/ui/Blocks';
import { BasketCard } from '@entities';
import { useSelector } from 'react-redux';
import { basketState } from '@shared/store/selector';

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
