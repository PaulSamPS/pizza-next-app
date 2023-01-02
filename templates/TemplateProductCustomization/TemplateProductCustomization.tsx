import React from 'react';
import { ModalProductCustomization } from '@components/Blocks';
import { ProductCustomization } from '@entities';
import { useSelector } from 'react-redux';
import { productModalState } from '../../store/selector/selector';

type TemplateProductCustomizationProps = {
  setModal: () => void;
  modal: boolean;
};
export const TemplateProductCustomization = ({
  setModal,
  modal,
}: TemplateProductCustomizationProps) => {
  const { product } = useSelector(productModalState);

  return (
    <ModalProductCustomization modal={modal} setModal={setModal}>
      {product && <ProductCustomization product={product} />}
    </ModalProductCustomization>
  );
};
