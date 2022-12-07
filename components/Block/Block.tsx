import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { BlockProps } from './Block.props';
import styles from './Block.module.scss';

export const Block = ({ children, ...restProps }: BlockProps) => {
  const { isDesktop } = useContext(DeviceContext);

  return (
    <div className={isDesktop ? styles.block : styles.mobile} {...restProps}>
      {children}
    </div>
  );
};
