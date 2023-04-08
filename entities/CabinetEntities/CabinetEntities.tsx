import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { Title } from '@shared/ui/Typography';
import { Tab } from '@features';
import styles from './Cabinet.module.scss';
import { OrderCard } from '../OrderCard';
import { Account } from '../Account/Account';

const arr = ['История заказов', 'Настройки'];

export const CabinetEntities = () => {
  const [currentValue, setCurrentValue] = React.useState<string>(arr[0]);
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return (
      <div className={styles.cabinet}>
        <div className={styles.title}>
          <Title level='1'>
            {currentValue === 'История заказов'
              ? 'История заказов'
              : 'Мой аккаунт'}
          </Title>
          <Tab
            className={styles.tab}
            arr={arr}
            currentValue={currentValue}
            setValue={setCurrentValue}
          />
        </div>
        {currentValue === 'История заказов' ? <OrderCard /> : <Account />}
      </div>
    );
  }

  return <OrderCard />;
};
