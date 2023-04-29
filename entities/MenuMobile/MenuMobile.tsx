import React from 'react';
import { LocationIcon, PhoneIcon } from '@shared/assets/icons/20';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { Text, Divider } from '@shared/ui';
import { Auth } from '@processes/Auth';
import styles from './MenuMobile.module.scss';
import { Login } from '../Header/components';

type MenuMobileProps = {
  isOpened: boolean;
};

const Portal = dynamic(() => import('../../shared/ui/Blocks/Portal'), {
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

const accountTab = [
  { id: 0, value: 'История заказов' },
  { id: 1, value: 'Настройки' },
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
            <Login />
            <Divider />
            <div className={styles['account-tab']}>
              {accountTab.map((i) => (
                <Link href={i.value === 'Настройки' ? '/settings' : '/cabinet'}>
                  <Text key={i.id} level='l3'>
                    {i.value}
                  </Text>
                </Link>
              ))}
              <Text className={styles.exit} level='l3'>
                Выйти из аккаунта
              </Text>
            </div>
            <Auth />
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
