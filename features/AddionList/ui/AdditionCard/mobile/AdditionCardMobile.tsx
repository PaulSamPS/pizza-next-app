import React from 'react';
import Image from 'next/image';
import { AdditionsType } from '@shared/types';
import { Title, Text, Card } from '@shared/ui';
import styles from './AdditionCardMobile.module.scss';

interface AdditionCardMobileProps extends Omit<AdditionsType, 'id'> {}

export const AdditionCardMobile = ({
  name,
  img,
  price,
}: AdditionCardMobileProps) => (
  <Card className={styles.additional}>
    <Image src={img} alt='additional' width={60} height={60} />
    <div className={styles.info}>
      <Title level='3' className={styles.name}>
        {name}
      </Title>
      <Text level='l2' weight='w1' className={styles.price}>
        {price}
        <span>₽</span>
      </Text>
    </div>
  </Card>
);
