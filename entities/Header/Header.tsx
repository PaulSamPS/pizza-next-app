import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

export const Header = () => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <HeaderDesktop />;
  }
  return <HeaderMobile />;
};
