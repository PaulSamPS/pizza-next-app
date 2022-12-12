import React, { useContext } from 'react';
import { Button } from '@components/Blocks';
import { Text, Title } from '@components/Typography';
import NumberFormat from 'react-number-format';
import { StepContext } from '@context';
import styles from './EnterPhone.module.scss';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const EnterPhone = () => {
  const [values, setValues] = React.useState<InputValueState>({
    formattedValue: '',
    value: '',
  });
  const { setPhone, nextStep } = useContext(StepContext);

  const handleClick = () => {
    setPhone(values.formattedValue);
    nextStep();
  };

  return (
    <div className={styles.phone}>
      <Title level='2'>Вход в аккаунт</Title>
      <Text level='l2'>
        Сможете быстро оформлять заказы, использовать бонусы
      </Text>
      <div className={styles.input}>
        <NumberFormat
          name='phone'
          format='+7 (###) ###-##-##'
          mask='_'
          placeholder='+7 (123) 456-78-90'
          value={values.formattedValue}
          onValueChange={({ formattedValue, value }) =>
            setValues({ formattedValue, value })
          }
        />
        <label htmlFor='phone'>Номер телефона</label>
      </div>
      <Button
        appearance='primary'
        disabled={values.value.length < 10}
        onClick={handleClick}
      >
        Войти
      </Button>
      <Text level='l3'>
        Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и
        пользовательским соглашением
      </Text>
    </div>
  );
};
