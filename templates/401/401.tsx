import React from 'react';
import { Title } from '@components/Typography';
import { Login } from '../../entities/Header/components';
import styles from './401.module.scss';

export const Error401Page = () => (
  <div className={styles['error-401']}>
    <Title level='3'>Не Авторизован</Title>
    <Login />
  </div>
  );