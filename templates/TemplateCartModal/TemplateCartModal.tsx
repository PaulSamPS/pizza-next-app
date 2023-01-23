import React from 'react';
import { ModalCart } from '@components/Blocks';
import { BasketCard } from '@entities';
import { IPizzaLocal } from '@types';

type TemplateCartModalProps = {
  setModal: () => void;
  modal: boolean;
  product: IPizzaLocal[];
};

export const TemplateCartModal = ({
  setModal,
  modal,
  product,
}: TemplateCartModalProps) => (
  <ModalCart modal={modal} setModal={setModal}>
    {product.map((p) => (
      <BasketCard key={p.id} product={p} />
    ))}
  </ModalCart>
);
