import React from 'react';
import { ArrowDownSmallIcon } from '@shared/assets/icons/16';
import { Text } from '@shared/ui/Typography';
import { Card, Divider, Icon } from '@shared/ui/Blocks';
import cx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { RepeatOrder } from '@features';
import { OrderCardProps } from '../type';
import { InfoOrder, OrderedProducts, ProductPreview } from '../ui';
import styles from './OrderCardDesktop.module.scss';

export const OrderCardDesktop = ({ order }: OrderCardProps) => {
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
          {order.products &&
            order.products
              .slice(0, 3)
              .map((i) => (
                <ProductPreview
                  key={i._id}
                  name={i.pizza ? i.pizza.name : i.product.name}
                  img={i.pizza ? i.pizza.img.regular : i.product.img}
                />
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
            {order.products
              .filter((f) => f.pizza)
              .map((i) => (
                <OrderedProducts
                  key={i._id}
                  img={
                    i.dough === 'Традиционное'
                      ? i.pizza.img.regular
                      : i.pizza.img.slim
                  }
                  name={i.pizza.name}
                  price={i.price}
                  count={i.qty}
                />
              ))}
            {order.products
              .filter((f) => f.product)
              .map((i) => (
                <OrderedProducts
                  key={i._id}
                  img={i.product.img}
                  name={i.product.name}
                  price={i.price}
                  count={i.qty}
                />
              ))}
            <Divider />
            <RepeatOrder currentOrderId={order._id} />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
