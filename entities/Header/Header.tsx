import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { HeaderMobile } from './mobile';
import { HeaderDesktop } from './desktop';

export const Header = () => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <HeaderDesktop />;
  }
  return <HeaderMobile />;
};
