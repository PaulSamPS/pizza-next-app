import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { Title } from '@shared/ui/Typography';
import { Tab } from '@features';
import { useSelector } from 'react-redux';
import { ordersState, userState } from '@shared/store/selector';
import { useAppDispatch } from '@shared/hooks';
import { getOrders } from '@shared/api';
import styles from './Cabinet.module.scss';
import { OrderCard } from '../OrderCard';
import { Account } from '../Account/Account';

const arr = ['История заказов', 'Настройки'];

export const CabinetEntities = () => {
  const [currentValue, setCurrentValue] = React.useState<string>(arr[0]);
  const { isDesktop } = useContext(DeviceContext);
  const { orders } = useSelector(ordersState);
  const { user } = useSelector(userState);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getOrders(user.id));
  }, []);

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
        {currentValue === 'История заказов' ? (
          orders.map((order) => <OrderCard order={order} />)
        ) : (
          <Account />
        )}
      </div>
    );
  }

  return (
    <>
      {orders.map((o) => (
        <OrderCard order={o} />
      ))}
    </>
  );
};
