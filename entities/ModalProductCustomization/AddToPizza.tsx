import React from 'react';
import cx from 'clsx';
import { Button, Icon } from '@components/Blocks';
import { DoneIcon } from '@helpers/icons/addendum';
import { Text } from '@components/Typography';
import Image, { StaticImageData } from 'next/image';
import styles from './AddToPizza.module.scss';

type AddToPizzaProps = {
  price: string;
  name: string;
  image: StaticImageData;
};

export const AddToPizza = ({ price, image, name }: AddToPizzaProps) => {
  const [additionItem, setAdditionItem] = React.useState<boolean>(false);

  return (
    <div
      className={cx(
        styles['addendum-card'],
        additionItem && price ? styles['added-primary'] : styles.added
      )}
    >
      <Button
        appearance='outline-gray'
        className={cx(
          styles['addendum-item'],
          price && additionItem && styles['price-added'],
          price && styles['icon-price']
        )}
        onClick={() => setAdditionItem(!additionItem)}
      >
        <Image src={image} alt='сыр' className={styles.image} />
        {additionItem && (
          <Icon className={styles.icon}>
            <DoneIcon />
          </Icon>
        )}
      </Button>
      <Text level='l1' className={styles.name}>
        {name}
      </Text>
      <Text level='l1' className={styles.price}>
        {price}
      </Text>
    </div>
  );
};
