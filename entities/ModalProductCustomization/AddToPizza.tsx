import React from 'react';
import cx from 'clsx';
import { Button, Icon } from '@components/Blocks';
import { CheeseIcon, DoneIcon, RemoveIcon } from '@helpers/icons/addendum';
import { Text } from '@components/Typography';
import styles from './AddToPizza.module.scss';

interface AddToPizzaProps extends React.AllHTMLAttributes<HTMLDivElement> {
  addendumItem: boolean;
  setAddendumItem: (value: boolean) => void;
  price?: boolean;
}

export const AddToPizza = ({
  addendumItem,
  setAddendumItem,
  price,
}: AddToPizzaProps) => (
  <div
    className={cx(
      styles['addendum-card'],
      addendumItem && price ? styles['added-primary'] : styles.added
    )}
  >
    <Button
      appearance='outline-gray'
      className={cx(
        styles['addendum-item'],
        price && addendumItem && styles['price-added'],
        price && styles['icon-price']
      )}
      onClick={() => setAddendumItem(!addendumItem)}
    >
      <CheeseIcon />
      {addendumItem && (
        <Icon className={styles.icon}>
          {price ? <DoneIcon /> : <RemoveIcon />}
        </Icon>
      )}
    </Button>
    <Text level='l1'>Моцарелла</Text>
    {price && (
      <Text level='l1' className={styles.price}>
        59 ₽
      </Text>
    )}
  </div>
);
