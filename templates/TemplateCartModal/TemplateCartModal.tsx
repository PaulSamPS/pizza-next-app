import React from 'react';
import { ModalCart } from '@components/Blocks';
import { CartCardModal } from '@entities';
import { IProduct } from '@types';

type TemplateCartModalProps = {
  setModal: (modal: boolean) => void;
  modal: boolean;
  product: IProduct[];
};

export const TemplateCartModal = ({
  setModal,
  modal,
  product,
}: TemplateCartModalProps) => (
  <ModalCart modal={modal} setModal={setModal}>
    {product.map((p) => (
      <CartCardModal key={p.id} product={p} />
    ))}
  </ModalCart>
);
