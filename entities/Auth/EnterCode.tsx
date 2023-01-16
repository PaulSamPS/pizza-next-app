import React from 'react';
import { Input } from '@components/Form';
import { Text, Title } from '@components/Typography';
import { Button } from '@components/Blocks';
import { DeviceContext, StepContext } from '@context';
import { useCodeTimer, useEnterCode, useSendCode } from '@hooks';
import cx from 'clsx';
import stylesDesktop from './EnterCodeDesktop.module.scss';
import stylesMobile from './EnterCodeMobile.module.scss';

export const EnterCode = () => {
  const { isDesktop } = React.useContext(DeviceContext);
  const step = React.useContext(StepContext);
  const enterCode = useEnterCode();
  const codeTimer = useCodeTimer();
  const sendCode = useSendCode();
  console.log(step.phone);

  const classes = isDesktop ? stylesDesktop : stylesMobile;

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
            error='Error'
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
            {`Отправить код ещё раз через: ${`${codeTimer.minutes}:${
              codeTimer.seconds < 10 && typeof codeTimer.seconds !== 'string'
                ? '0'
                : ''
            }${codeTimer.seconds}`}`}
          </Text>
        ) : (
          <Text level='l2' onClick={() => sendCode.onSubmit(step.phone)}>
            Получить новый код
          </Text>
        )}
        <Text level='l2' onClick={() => step.setStep(0)}>
          Ввести другой телефон
        </Text>
      </div>
    </div>
  );
};
