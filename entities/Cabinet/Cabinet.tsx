import React from 'react';
import { Title } from '@components/Typography';
import { Tab } from '@components/Blocks';
import styles from './Cabinet.module.scss';

const arr = ['История заказов', 'Настройки'];

export const Cabinet = () => {
  const [currentValue, setCurrentValue] = React.useState<string>(arr[0]);
  return (
    <div className={styles.cabinet}>
      <div className={styles.title}>
        <Title level='1'>Мой аккаунт</Title>
        <Tab
          className={styles.tab}
          arr={arr}
          currentValue={currentValue}
          setValue={setCurrentValue}
        />
      </div>
    </div>
  );
};
