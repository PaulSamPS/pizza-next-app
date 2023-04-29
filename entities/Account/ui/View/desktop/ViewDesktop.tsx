import React from 'react';
import { Text, Title } from '@shared/ui';
import { EditIcon } from '@shared/assets/icons';
import { useSelector } from 'react-redux';
import { userState } from '@shared/store/selector';
import styles from './ViewDesktop.module.scss';
import { ViewProps } from '../type';

export const ViewDesktop = ({ edit }: ViewProps) => {
  const { user } = useSelector(userState);

  return (
    <>
      <div className={styles.top}>
        <Title level='3'>Личные данные</Title>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={styles.edit} onClick={() => edit(true)}>
          <EditIcon />
          Изменить
        </div>
      </div>
      <div className={styles['personal-data']}>
        <div className={styles.item}>
          <Text level='l1' className={styles.label}>
            Имя*
          </Text>
          <Text level='l2' className={styles.value}>
            {user.name ? user.name : user.id}
          </Text>
        </div>
        <div className={styles.item}>
          <Text level='l1' className={styles.label}>
            Номер Телефона*
          </Text>
          <Text level='l2' className={styles.value}>
            {user.phone}
          </Text>
        </div>
        <div className={styles.item}>
          <Text level='l1' className={styles.label}>
            Почта
          </Text>
          <Text level='l2' className={styles.value}>
            psamoylenko2@gmail.com
          </Text>
        </div>
        <div className={styles.item}>
          <Text level='l1' className={styles.label}>
            Дата рождения
          </Text>
          <Text level='l2' className={styles.value}>
            19.07.1990
          </Text>
        </div>
      </div>
    </>
  );
};
