import React, { useContext } from 'react';
import { Title } from '@components/Typography';
import { Tab } from '@components/Blocks';
import { DeviceContext } from '@context';
import styles from './Cabinet.module.scss';
import { OrderCard } from '../OrderCard';

const arr = ['История заказов', 'Настройки'];

export const Cabinet = () => {
  const [currentValue, setCurrentValue] = React.useState<string>(arr[0]);
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
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
        <OrderCard />
      </div>
    );
  }

  return <OrderCard />;
};
