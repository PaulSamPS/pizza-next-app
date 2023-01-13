import React from 'react';
import { ModalCart } from '@components/Blocks';
import { CartCard } from '@entities';
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
      <CartCard key={p.id} product={p} />
    ))}
  </ModalCart>
);
