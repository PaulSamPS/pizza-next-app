import React, { useContext } from 'react';
import cx from 'clsx';
import { DeviceContext } from '@context';
import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import stylesMobile from './CardMobile.module.scss';

export const Card = ({
  children,
  appearance,
  Component = 'div',
  ...restProps
}: CardProps) => {
  const { isDesktop } = useContext(DeviceContext);
  console.log(isDesktop, 'desktop');

  const classes = cx(styles.card, appearance && styles[appearance]);

  const classesMobile = cx(
    stylesMobile.card,
    appearance && stylesMobile[appearance]
  );

  return (
    <Component className={isDesktop ? classes : classesMobile} {...restProps}>
      {children}
    </Component>
  );
};
