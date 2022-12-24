import React from 'react';
import cx from 'clsx';
import { Button, Icon } from '@components/Blocks';
import { DoneIcon } from '@helpers/icons/addendum';
import { Text } from '@components/Typography';
import Image, { StaticImageData } from 'next/image';
import styles from './AddToPizza.module.scss';

interface AddToPizzaProps extends React.AllHTMLAttributes<HTMLDivElement> {
  price: string;
  name: string;
  image: StaticImageData;
}

export const AddToPizza = ({ price, image, name }: AddToPizzaProps) => {
  const [addendumItem, setAddendumItem] = React.useState<boolean>(false);

  return (
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
        <Image src={image} alt='сыр' className={styles.image} />
        {addendumItem && (
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
