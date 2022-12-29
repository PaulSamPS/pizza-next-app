import React from 'react';
import { ModalProductCustomization } from '@components/Blocks';
import { ProductCustomization } from '@entities';
import { IProduct } from '@types';

type TemplateProductCustomizationProps = {
  product: IProduct;
  setModal: (modal: boolean) => void;
  modal: boolean;
};
export const TemplateProductCustomization = ({
  product,
  setModal,
  modal,
}: TemplateProductCustomizationProps) => (
  <ModalProductCustomization modal={modal} setModal={setModal}>
    <ProductCustomization product={product} />
  </ModalProductCustomization>
);
