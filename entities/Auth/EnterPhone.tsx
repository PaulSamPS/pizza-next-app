import React, { useContext } from 'react';
import { Button } from '@components/Blocks';
import { Text, Title } from '@components/Typography';
import { DeviceContext, StepContext } from '@context';
import { InputPhone } from '@components/Form';
import stylesDesktop from './EnterPhoneDesktop.module.scss';
import stylesMobile from './EnterPhoneMobile.module.scss';

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
  const { isDesktop } = useContext(DeviceContext);

  const classes = isDesktop ? stylesDesktop : stylesMobile;

  const handleClick = () => {
    setPhone(values.formattedValue);
    nextStep();
  };

  return (
    <div className={classes.phone}>
      <Title level='2'>Вход в аккаунт</Title>
      <Text level='l2' className={classes.subtitle}>
        Сможете быстро оформлять заказы, использовать бонусы
      </Text>
      <InputPhone name='Номер телефона' values={values} setValues={setValues} />
      <Button
        appearance='primary'
        disabled={values.value.length < 10}
        onClick={handleClick}
      >
        Войти
      </Button>
      <Text level='l3' className={classes.terms}>
        Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и
        пользовательским соглашением
      </Text>
    </div>
  );
};
