import React from 'react';
import cx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { LargeSizeIcon, MiddleSizeIcon } from '@helpers/icons/sizes';
import styles from '../styles/ProductCustomizationImage.module.scss';

type PizzaImageProps = {
  pizzaSize: string;
  dough: string;
  image: { regular: StaticImageData; slim: StaticImageData };
};

export const ProductCustomizationImage = ({
  pizzaSize,
  dough,
  image,
}: PizzaImageProps) => (
  <div className={styles['image-block']}>
    <div className={cx(styles.image, styles[`${pizzaSize}-size`])}>
      <Image
        src={dough === 'Традиционное' ? image.regular : image.slim}
        alt='product'
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
