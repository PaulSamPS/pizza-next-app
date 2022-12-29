import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { HeaderDesktop, HeaderMobile } from '@entities';
import { IProduct } from '@types';

type HeaderProps = {
  product: IProduct[];
};

export const Header = ({ product }: HeaderProps) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <HeaderDesktop product={product} />;
  }
  return <HeaderMobile />;
};
