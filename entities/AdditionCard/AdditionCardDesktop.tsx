import React from 'react';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import { Button, Card } from '@components/Blocks';
import cx from 'clsx';
import additional from './addition.jpg';
import styles from './AdditionCardDesktop.module.scss';

type AdditionalCardProps = {
  description?: boolean;
};

export const AdditionCardDesktop = ({
  description = false,
}: AdditionalCardProps) => (
  <Card className={styles.additional}>
    <Image src={additional} alt='additional' />
    <div className={styles.info}>
      <Title level='3' className={styles.name}>
        Картофель из печи
      </Title>
      {description && <Paragraph>Порция 95 г</Paragraph>}
    </div>
    <div
      className={cx(
        styles.bottom,
        !description && styles['with-out-description']
      )}
    >
      <Button appearance='primary'>179 ₽</Button>
    </div>
  </Card>
);
