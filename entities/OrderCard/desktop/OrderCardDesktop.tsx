import React from 'react';
import { ArrowDownSmallIcon } from '@shared/assets/icons/16';
import { useSelector } from 'react-redux';
import { ordersState, productState, userState } from '@shared/store/selector';
import { Text } from '@shared/ui/Typography';
import { Card, Divider, Icon } from '@shared/ui/Blocks';
import cx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch } from '@shared/hooks';
import { getOrders } from '@shared/api';
import styles from './OrderCardDesktop.module.scss';
import { InfoOrder, OrderedProducts, ProductPreview } from '../ui';

const order = [
  {
    id: 0,
    title: 'Заказ',
    value: '№130312',
    date: '22.01.2023',
  },
  {
    id: 1,
    title: 'Сумма',
    value: '399 ₽',
  },
  {
    id: 2,
    title: 'Статус',
    value: 'Обрабатывается',
  },
  {
    id: 3,
    title: 'Оплачено',
    value: 'Картой',
  },
];

export const OrderCardDesktop = () => {
  const { items } = useSelector(productState);
  const [visible, setVisible] = React.useState<boolean>(false);
  const { orders } = useSelector(ordersState);
  const { user } = useSelector(userState);
  const dispatch = useAppDispatch();
  console.log(orders, 'orders');

  React.useEffect(() => {
    dispatch(getOrders(user.id));
  }, []);

  const variants = {
    open: { height: 'auto', opacity: '1' },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <Card className={styles.card}>
      <div className={styles.top}>
        <div className={styles.border} />
        {order.map((c) => (
          <InfoOrder key={c.id} title={c.title} value={c.value} date={c.date} />
        ))}
        <Icon
          className={cx(styles.icon, visible && styles['icon-transform'])}
          onClick={() => setVisible(!visible)}
        >
          <ArrowDownSmallIcon />
        </Icon>
      </div>
      <Divider />
      <div className={styles.info}>
        <Text level='l2'>
          ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
        </Text>
        <div className={styles['products-preview']}>
          {items.slice(0, 3).map((i) => (
            <ProductPreview key={i.id} name={i.name} img={i.img} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            animate={visible ? 'open' : 'closed'}
            variants={variants}
            initial='closed'
            exit='closed'
            transition={{
              damping: 20,
              type: 'spring',
              stiffness: 250,
            }}
          >
            <Divider />
            {items.map((i) => (
              <OrderedProducts
                key={i.id}
                img={i.img}
                name={i.name}
                price={i.price}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
