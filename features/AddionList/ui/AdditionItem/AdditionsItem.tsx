import React from 'react';
import cx from 'clsx';
import { Button, Icon } from '@shared/ui/Blocks';
import { DoneIcon } from '@shared/assets/icons/addendum';
import { Text } from '@shared/ui/Typography';
import Image from 'next/image';
import { AdditionsType } from '@shared/types';
import styles from './AdditionsItem.module.scss';

type AddToPizzaProps = {
  item: AdditionsType;
};

export const AdditionsItem = ({ item }: AddToPizzaProps) => {
  const [additionItem, setAdditionItem] = React.useState<boolean>(false);

  return (
    <div className={styles['addendum-card']}>
      <Button
        appearance='outline-gray'
        className={cx(styles['addendum-item'], additionItem && styles.added)}
        onClick={() => setAdditionItem(!additionItem)}
      >
        <Image src={item.img} alt='сыр' className={styles.image} />
        {additionItem && (
          <Icon className={styles.icon}>
            <DoneIcon />
          </Icon>
        )}
      </Button>
      <Text
        level='l1'
        className={cx(styles.name, additionItem && styles['added-text'])}
      >
        {item.name}
      </Text>
      <Text level='l1' className={styles.price}>
        {item.price}
      </Text>
    </div>
  );
};
