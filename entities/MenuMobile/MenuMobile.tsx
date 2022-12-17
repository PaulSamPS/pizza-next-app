import React from 'react';
import { Divider, Icon } from '@components/Blocks';
import { AccountIcon, LocationIcon, PhoneIcon } from '@helpers/icons/20';
import { Text } from '@components/Typography';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MenuMobile.module.scss';

type MenuMobileProps = {
  isOpened: boolean;
};

const Portal = dynamic(() => import('@components/Blocks/Portal'), {
  ssr: false,
});

const another = [
  'Акции',
  'Пользовательское соглашение',
  'О компании',
  'Условия гарантии',
  'Ресторан',
  'Контакты',
  'Поддержка',
  'Отследить заказ',
];

export const MenuMobile = ({ isOpened }: MenuMobileProps) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-50%' },
  };

  return (
    <Portal>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className={styles.menu}
            animate={isOpened ? 'open' : 'closed'}
            variants={variants}
            initial='closed'
            exit='closed'
            transition={{
              bounceStiffness: 2,
            }}
          >
            <div className={styles.login}>
              <Icon primary>
                <AccountIcon />
              </Icon>
              <Text level='l3'>Войти в аккаунт</Text>
            </div>
            <Divider />
            <div className={styles.list}>
              {another.map((a) => (
                <Link key={a} href='/'>
                  {a}
                </Link>
              ))}
            </div>
            <Divider />
            <div className={styles.contacts}>
              <div className={styles.item}>
                <PhoneIcon />
                <Text level='l3'>+7 (926) 223-10-11</Text>
              </div>
              <div className={styles.item}>
                <LocationIcon />
                <Text level='l3'>Москва, ул. Юных Ленинцев, д.99</Text>
              </div>
            </div>
            <div className={styles.bottom}>
              <Text level='l3'>Время работы: с 11:00 до 23:00</Text>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
