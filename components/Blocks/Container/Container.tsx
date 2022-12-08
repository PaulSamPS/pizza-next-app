import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import styles from './Container.module.scss';

interface ContainerProps extends React.AllHTMLAttributes<HTMLElement> {}

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
