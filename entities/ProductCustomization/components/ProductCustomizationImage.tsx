import React from 'react';
import cx from 'clsx';
import { LargeSizeIcon, MiddleSizeIcon } from '@helpers/icons/sizes';
import Image from 'next/image';
import styles from '../styles/ProductCustomizationImage.module.scss';

type PizzaImageProps = {
  pizzaSize: string;
  dough: string;
  image: { regular: string; slim: string };
  name: string;
};

export const ProductCustomizationImage = ({
  pizzaSize,
  dough,
  image,
  name,
}: PizzaImageProps) => (
  <div className={styles['image-block']}>
    <div className={cx(styles.image, styles[`${pizzaSize}-size`])}>
      <Image
        src={
          dough === 'Традиционное'
            ? `http://localhost:5000/product/${name}/${image.regular}`
            : `http://localhost:5000/product/${name}/${image.slim}`
        }
        alt='product'
        width={341}
        height={341}
      />
    </div>
    <i className={styles.middle}>
      <MiddleSizeIcon />
    </i>
    <i className={styles.large}>
      <LargeSizeIcon />
    </i>
  </div>
);
