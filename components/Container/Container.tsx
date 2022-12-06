import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { ContainerProps } from './Container.props';
import styles from './Container.module.scss';

export const Container = ({ children, ...restProps }: ContainerProps) => {
  const { isDesktop } = useContext(DeviceContext);

  return (
    <div
      className={isDesktop ? styles.container : styles.mobile}
      {...restProps}
    >
      {children}
    </div>
  );
};
