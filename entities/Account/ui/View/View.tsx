import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { ViewDesktop } from './desktop';
import { ViewProps } from './type';
import { ViewMobile } from './mobile';

export const View = ({ edit }: ViewProps) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <ViewDesktop edit={edit} />;
  }
  return <ViewMobile edit={edit} />;
};
