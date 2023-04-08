import React from 'react';
import { Card, Text, Title } from '@shared/ui';
import { EditIcon } from '@shared/assets/icons';
import styles from './Account.module.scss';

export const Account = () => (
  <div>
    <Card className={styles['user-info']}>
      <div className={styles.top}>
        <Title level='3'>Личные данные</Title>
        <div className={styles.edit}>
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
            Павел
          </Text>
        </div>
        <div className={styles.item}>
          <Text level='l1' className={styles.label}>
            Номер Телефона*
          </Text>
          <Text level='l2' className={styles.value}>
            +79225576656
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
    </Card>
  </div>
);
