import React from 'react';
import { Paragraph, Text } from '@shared/ui/Typography';
import styles from './styles/PizzaCustomizationDescription.module.scss';

type ModalProductCustomizationDescriptionProps = {
  pizzaSize: string;
  dough: string;
  weight: string;
  desc: string;
};

export const PizzaCustomizationDescription = ({
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
