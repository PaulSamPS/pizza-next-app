import React, { useContext } from 'react';
import cx from 'clsx';
import { DeviceContext } from '@context';
import { CardProps } from './Card.props';
import desktop from './Desktop.module.scss';
import mobile from './Mobile.module.scss';

export const Card = ({
  children,
  appearance,
  Component = 'div',
  ...restProps
}: CardProps) => {
  const { isDesktop } = useContext(DeviceContext);

  const classes = cx(desktop.card, appearance && desktop[appearance]);

  const classesMobile = cx(mobile.card, appearance && mobile[appearance]);

  return (
    <Component className={isDesktop ? classes : classesMobile} {...restProps}>
      {children}
    </Component>
  );
};
