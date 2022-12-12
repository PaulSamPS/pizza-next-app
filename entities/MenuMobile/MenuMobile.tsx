import React from 'react';
import { Divider, Icon } from '@components/Blocks';
import { AccountIcon } from '@helpers/icons/20';
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
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
