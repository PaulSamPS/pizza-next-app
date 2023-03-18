import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { ModalProductDesktop } from './desktop';
import { ModalProductMobile } from './mobile';

type ModalProductProps = {
  setModal: () => void;
  modal: boolean;
  children: React.ReactNode;
};
export const ModalProduct = ({
  setModal,
  modal,
  children,
}: ModalProductProps) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return (
      <ModalProductDesktop setModal={setModal} modal={modal}>
        {children}
      </ModalProductDesktop>
    );
  }

  return (
    <ModalProductMobile setModal={setModal} modal={modal}>
      {children}
    </ModalProductMobile>
  );
};
