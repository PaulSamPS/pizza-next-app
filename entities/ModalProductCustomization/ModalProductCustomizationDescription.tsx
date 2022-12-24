import React from 'react';
import { Paragraph, Text } from '@components/Typography';
import styles from './ModalProductCustomizationDescription.module.scss';

type ModalProductCustomizationDescriptionProps = {
  pizzaSize: string;
  dough: string;
};

export const ModalProductCustomizationDescription = ({
  dough,
  pizzaSize,
}: ModalProductCustomizationDescriptionProps) => (
  <div className={styles.description}>
    <Text level='l2' className={styles.info}>
      {`${pizzaSize}, ${dough.toLowerCase()} тесто, 330 г`}
    </Text>
    <Paragraph>
      Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо
    </Paragraph>
  </div>
);
