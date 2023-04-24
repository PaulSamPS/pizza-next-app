import React, { useContext } from 'react';
import Image from 'next/image';
import { IProductLocal } from '@shared/types';
import { DeviceContext } from '@shared/context';
import cx from 'clsx';
import styles from './ProductPreview.module.scss';

interface ProductPreviewProps extends Pick<IProductLocal, 'name' | 'img'> {}

export const ProductPreview = ({ img, name }: ProductPreviewProps) => {
  const { isDesktop } = useContext(DeviceContext);
  return (
    <Image
      className={cx(styles.image, isDesktop ? styles.desktop : styles.mobile)}
      src={`http://localhost:5000/product/${name}/${img}`}
      alt={name}
      width={40}
      height={40}
    />
  );
};
