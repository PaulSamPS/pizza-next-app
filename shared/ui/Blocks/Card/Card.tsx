import React, { useContext } from 'react';
import cx from 'clsx';
import { DeviceContext } from '@shared/context';
import { HasComponent, HasRootRef } from '@shared/types';
import desktop from './styles/desktop.module.scss';
import mobile from './styles/mobile.module.scss';

export interface CardProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent,
    HasRootRef<HTMLElement> {
  appearance?: 'outline';
}

export const Card = ({
  children,
  appearance = 'outline',
  Component = 'div',
  getRootRef,
  className,
  ...restProps
}: CardProps) => {
  const { isDesktop } = useContext(DeviceContext);

  const classes = cx(
    className,
    desktop.card,
    appearance && desktop[appearance]
  );

  const classesMobile = cx(
    mobile.card,
    appearance && mobile[appearance],
    className
  );

  return (
    <Component
      className={isDesktop ? classes : classesMobile}
      {...restProps}
      ref={getRootRef}
    >
      {children}
    </Component>
  );
};
