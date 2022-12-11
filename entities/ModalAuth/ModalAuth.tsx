import React from 'react';
import { Button, Modal } from '@components/Blocks';
import { Text, Title } from '@components/Typography';
import NumberFormat from 'react-number-format';
import styles from './ModalAuth.module.scss';

type ModalAuthProps = {
  setModal: (modal: boolean) => void;
};

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const ModalAuth = ({ setModal }: ModalAuthProps) => {
  const [values, setValues] = React.useState<InputValueState>(
    {} as InputValueState
  );

  return (
    <Modal setModal={setModal}>
      <div className={styles['modal-auth']}>
        <Title level='2'>Вход в аккаунт</Title>
        <Text level='l2'>
          Сможете быстро оформлять заказы, использовать бонусы
        </Text>
        <div className={styles.form}>
          <NumberFormat
            name='phone'
            format='+7 (###) ###-##-##'
            mask='_'
            placeholder='+7 (123) 456-78-90'
            value={values.formattedValue}
            onValueChange={({ formattedValue, value }) =>
              setValues({ formattedValue, value })}
          />
          <label htmlFor='phone'>Номер телефона</label>
          <Button appearance='primary'>Войти</Button>
          <Text level='l3'>
            Продолжая, вы соглашаетесь со сбором и обработкой персональных
            данных и пользовательским соглашением
          </Text>
        </div>
      </div>
    </Modal>
  );
};
