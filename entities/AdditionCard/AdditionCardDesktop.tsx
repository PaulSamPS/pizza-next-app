import React from 'react';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import { Button, Card } from '@components/Blocks';
import cx from 'clsx';
import styles from './AdditionCardDesktop.module.scss';
import { AdditionsType } from '../../types/additions';

interface AdditionCardDesktopProps extends Omit<AdditionsType, 'id'> {
  description?: boolean;
}

export const AdditionCardDesktop = ({
  description = false,
  name,
  img,
  price,
}: AdditionCardDesktopProps) => (
  <Card className={styles.additional}>
    <Image src={img} alt='additional' />
    <div className={styles.info}>
      <Title level='3' className={styles.name}>
        {name}
      </Title>
      {description && <Paragraph>Порция 95 г</Paragraph>}
    </div>
    <div
      className={cx(
        styles.bottom,
        !description && styles['with-out-description']
      )}
    >
      <Button appearance='primary'>
        {price}
        <span>₽</span>
      </Button>
    </div>
  </Card>
);
