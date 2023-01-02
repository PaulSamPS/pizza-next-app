import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import {
  ModalProductCustomizationDesktop,
  ModalProductCustomizationMobile,
} from '@components/Blocks';

type ModalProductCustomizationProps = {
  setModal: () => void;
  modal: boolean;
  children: React.ReactNode;
};
export const ModalProductCustomization = ({
  setModal,
  modal,
  children,
}: ModalProductCustomizationProps) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return (
      <ModalProductCustomizationDesktop setModal={setModal} modal={modal}>
        {children}
      </ModalProductCustomizationDesktop>
    );
  }

  return (
    <ModalProductCustomizationMobile setModal={setModal} modal={modal}>
      {children}
    </ModalProductCustomizationMobile>
  );
};
