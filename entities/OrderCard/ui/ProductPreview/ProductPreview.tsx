import React from 'react';
import Image from 'next/image';
import { IProductLocal } from '@types';
import styles from './ProductPreview.module.scss';

interface ProductPreviewProps extends Pick<IProductLocal, 'name' | 'img'> {}

export const ProductPreview = ({ img, name }: ProductPreviewProps) => (
  <Image
    className={styles.image}
    src={`http://localhost:5000/product/${name}/${img}`}
    alt={name}
    width={40}
    height={40}
  />
  );
