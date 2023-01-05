import React from 'react';
import { DeviceContext } from '@context';
import { ModalAuthDesktop } from '@components/Blocks/ModalAuth/ModalAuthDesktop';
import { ModalAuthMobile } from '@components/Blocks/ModalAuth/ModalAuthMobile';

type ModalAuthProps = {
  setModal: () => void;
  modal: boolean;
  children: React.ReactNode;
};

export const ModalAuth = ({ setModal, modal, children }: ModalAuthProps) => {
  const { isDesktop } = React.useContext(DeviceContext);

  if (isDesktop) {
    return (
      <ModalAuthDesktop setModal={setModal} modal={modal}>
        {children}
      </ModalAuthDesktop>
    );
  }

  return (
    <ModalAuthMobile setModal={setModal} modal={modal}>
      {children}
    </ModalAuthMobile>
  );
};
