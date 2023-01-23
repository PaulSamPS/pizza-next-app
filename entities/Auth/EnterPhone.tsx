import React, { useContext } from 'react';
import { Button } from '@components/Blocks';
import { Text, Title } from '@components/Typography';
import { DeviceContext } from '@context';
import { InputPhone } from '@components/Form';
import { useSendCode } from './hooks';
import stylesDesktop from './EnterPhoneDesktop.module.scss';
import stylesMobile from './EnterPhoneMobile.module.scss';

export const EnterPhone = () => {
  const [value, setValue] = React.useState<string>('');
  const { isDesktop } = useContext(DeviceContext);
  const { onSubmit, error } = useSendCode();

  const classes = isDesktop ? stylesDesktop : stylesMobile;

  return (
    <div className={classes.phone}>
      <Title level='2'>Вход в аккаунт</Title>
      <Text level='l2' className={classes.subtitle}>
        Сможете быстро оформлять заказы, использовать бонусы
      </Text>
      {error && (
        <Text level='l2' className={classes.message}>
          {error}
        </Text>
      )}
      <InputPhone
        name='Номер телефона'
        value={value}
        setValues={(e) => setValue(e.target.value)}
      />
      <Button
        appearance='primary'
        disabled={value.length < 10}
        onClick={() => onSubmit(value)}
      >
        Войти
      </Button>
      <Text level='l1' className={classes.terms}>
        Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и
        пользовательским соглашением
      </Text>
    </div>
  );
};
