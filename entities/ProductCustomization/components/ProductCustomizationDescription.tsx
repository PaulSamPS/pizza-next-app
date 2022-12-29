import React from 'react';
import { Paragraph, Text } from '@components/Typography';
import styles from '../styles/ProductCustomizationDescription.module.scss';

type ModalProductCustomizationDescriptionProps = {
  pizzaSize: string;
  dough: string;
  weight: string;
  desc: string;
};

export const ProductCustomizationDescription = ({
  dough,
  pizzaSize,
  weight,
  desc,
}: ModalProductCustomizationDescriptionProps) => (
  <div className={styles.description}>
    <Text level='l2' className={styles.info}>
      {`${pizzaSize}, ${dough.toLowerCase()} тесто, ${weight}`}
    </Text>
    <Paragraph>{desc}</Paragraph>
  </div>
);
