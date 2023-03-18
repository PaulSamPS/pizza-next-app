import React from 'react';
import { Input } from '@shared/ui/Form';
import { Text, Title } from '@shared/ui/Typography';
import { Button } from '@shared/ui/Blocks';
import { DeviceContext } from '@shared/context';
import cx from 'clsx';
import { StepContext } from '@processes/Auth';
import { useCodeTimer, useEnterCode, useSendCode } from '../../hooks';
import stylesDesktop from './EnterCodeDesktop.module.scss';
import stylesMobile from './EnterCodeMobile.module.scss';

export const EnterCode = () => {
  const { isDesktop } = React.useContext(DeviceContext);
  const step = React.useContext(StepContext);
  const enterCode = useEnterCode();
  const codeTimer = useCodeTimer();
  const sendCode = useSendCode();

  const classes = isDesktop ? stylesDesktop : stylesMobile;

  const addZero = codeTimer.seconds < 10 ? '0' : '';

  return (
    <div className={classes['enter-code']}>
      <Title level='2'>Код</Title>
      <Text level='l2' className={classes.info}>
        Введите последние 4 цифры звонившего номера.
      </Text>
      {enterCode.error && (
        <Text level='l2' className={classes['error-message']}>
          {enterCode.error}
        </Text>
      )}
      <div
        className={cx(classes.code, enterCode.error && classes['error-code'])}
      >
        {enterCode.codes.map((code, index) => (
          <Input
            code
            key={index}
            maxLength={1}
            id={String(index)}
            value={code}
            placeholder='X'
            autoComplete='off'
            onChange={enterCode.handleInputCode}
          />
        ))}
      </div>
      <Button
        appearance='primary'
        onClick={enterCode.onSubmit}
        disabled={enterCode.codes.join('').length < 4}
      >
        Войти
      </Button>
      <div className={classes['resend-code']}>
        {codeTimer.isStopTimer ? (
          <Text level='l2' className={classes.timer}>
            {`Повторная отправка кода ещё раз через: ${`${codeTimer.minutes}:${addZero}${codeTimer.seconds}`}`}
          </Text>
        ) : (
          <Text
            className={classes.text}
            level='l2'
            onClick={() => sendCode.onSubmit(step.phone)}
          >
            Получить новый код
          </Text>
        )}
        <Text
          className={classes.text}
          level='l2'
          onClick={() => step.setStep(0)}
        >
          Ввести другой телефон
        </Text>
      </div>
    </div>
  );
};
