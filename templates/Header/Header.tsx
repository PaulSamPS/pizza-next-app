import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { HeaderDesktop, HeaderMobile } from '@entities';

export const Header = () => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <HeaderDesktop />;
  }
  return <HeaderMobile />;
};
