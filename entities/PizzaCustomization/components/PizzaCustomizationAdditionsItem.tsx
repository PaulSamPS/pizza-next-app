import React from 'react';
import cx from 'clsx';
import { Button, Icon } from '@components/Blocks';
import { DoneIcon } from '@helpers/icons/addendum';
import { Text } from '@components/Typography';
import Image, { StaticImageData } from 'next/image';
import styles from './styles/PizzaCustomizationAdditionsItem.module.scss';

type AddToPizzaProps = {
  price: number;
  name: string;
  image: StaticImageData;
};

export const PizzaCustomizationAdditionsItem = ({
  price,
  image,
  name,
}: AddToPizzaProps) => {
  const [additionItem, setAdditionItem] = React.useState<boolean>(false);

  return (
    <div className={styles['addendum-card']}>
      <Button
        appearance='outline-gray'
        className={cx(styles['addendum-item'], additionItem && styles.added)}
        onClick={() => setAdditionItem(!additionItem)}
      >
        <Image src={image} alt='сыр' className={styles.image} />
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
        {name}
      </Text>
      <Text level='l1' className={styles.price}>
        {price}
      </Text>
    </div>
  );
};
