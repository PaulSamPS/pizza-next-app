import React from 'react';
import { ArrowDownSmallIcon } from '@shared/assets/icons/16';
import { useSelector } from 'react-redux';
import { productState } from '@shared/store/selector';
import { Text } from '@shared/ui/Typography';
import { Card, Divider, Icon } from '@shared/ui/Blocks';
import cx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { OrdersInterface } from '@shared/types';
import styles from './OrderCardDesktop.module.scss';
import { InfoOrder, OrderedProducts, ProductPreview } from '../ui';

interface OrderCardDesktopProps {
  order: OrdersInterface;
}

export const OrderCardDesktop = ({ order }: OrderCardDesktopProps) => {
  const { items } = useSelector(productState);
  const [visible, setVisible] = React.useState<boolean>(false);

  const variants = {
    open: { height: 'auto', opacity: '1' },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <Card className={styles.card}>
      <div className={styles.top}>
        <div className={styles.border} />
        <InfoOrder
          date={order.date}
          orderNumber={order.orderNumber}
          paymentMethod={order.info.payment}
          status={order.status}
          sum={order.totalPrice}
        />
        <Icon
          className={cx(styles.icon, visible && styles['icon-transform'])}
          onClick={() => setVisible(!visible)}
        >
          <ArrowDownSmallIcon />
        </Icon>
      </div>
      <Divider />
      <div className={styles.info}>
        {order.info.street && (
          <Text level='l2'>
            ул.
            {order.info.street}
          </Text>
        )}
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
