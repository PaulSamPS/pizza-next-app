import React from 'react';
import { DeviceContext } from '@context';
import ModalCartMobile from '@components/Blocks/ModalCart/ModalCartMobile';
import { ModalCartDesktop } from '@components/Blocks/ModalCart/ModalCartDesktop';

interface ModalCartProps extends React.AllHTMLAttributes<HTMLDivElement> {
  setModal: () => void;
  modal: boolean;
}

export const ModalCart = ({ setModal, modal, children }: ModalCartProps) => {
  const { isDesktop } = React.useContext(DeviceContext);

  if (isDesktop) {
    return (
      <ModalCartDesktop setModal={setModal} modal={modal}>
        {children}
      </ModalCartDesktop>
    );
  }

  return (
    <ModalCartMobile setModal={setModal} modal={modal}>
      {children}
    </ModalCartMobile>
  );
};
