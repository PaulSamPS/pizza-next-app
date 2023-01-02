import React from 'react';
import Image from 'next/image';
import { IProduct } from '@types';
import styles from './styles/ProductCustomizationMobile.module.scss';

type ProductCustomizationMobileProps = {
  product: IProduct;
};

const ProductCustomizationMobile = ({
  product,
}: ProductCustomizationMobileProps) => (
  <div className={styles.card}>
    <Image
      src={`http://localhost:5000/product/${product.name}/${product.img.regular}`}
      alt={product.name}
      width={300}
      height={300}
    />
  </div>
);

export default ProductCustomizationMobile;
