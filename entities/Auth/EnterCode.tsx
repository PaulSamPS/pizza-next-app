import React, { ChangeEvent, useContext } from 'react';
import { Input } from '@components/Form';
import { Text, Title } from '@components/Typography';
import { Button } from '@components/Blocks';
import { DeviceContext } from '@context';
import stylesDesktop from './EnterCodeDesktop.module.scss';
import stylesMobile from './EnterCodeMobile.module.scss';

export const EnterCode = () => {
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const { isDesktop } = useContext(DeviceContext);

  const classes = isDesktop ? stylesDesktop : stylesMobile;

  const onSubmit = async () => {
    // eslint-disable-next-line no-console
    console.log(codes.join(''));
  };

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const { value } = event.target;

    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className={classes['enter-code']}>
      <Title level='2'>Код</Title>
      <Text level='l2' className={classes.info}>
        Введите последние 4 цифры звонившего номера.
      </Text>
      <div className={classes.code}>
        {codes.map((code, index) => (
          <Input
            code
            error='Error'
            key={index}
            maxLength={1}
            id={String(index)}
            value={code}
            placeholder='X'
            autoComplete='off'
            onChange={handleChangeInput}
          />
        ))}
      </div>
      <Button
        appearance='primary'
        onClick={onSubmit}
        disabled={codes.join('').length < 4}
      >
        Войти
      </Button>
      <div className={classes['resend-code']}>
        <Text level='l2'>Отправить код ещё раз через:</Text>
        <Text level='l2' className={classes.timer}>
          59 секунд
        </Text>
      </div>
    </div>
  );
};
