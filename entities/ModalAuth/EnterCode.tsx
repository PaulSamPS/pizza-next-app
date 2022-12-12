import React, { ChangeEvent } from 'react';
import { Input } from '@components/Form';
import { Text, Title } from '@components/Typography';
import { Button } from '@components/Blocks';
import styles from './EnterCode.module.scss';

export const EnterCode = () => {
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const [enteredCode, setEnteredCode] = React.useState<string>('');

  const onSubmit = async () => {
    // eslint-disable-next-line no-console
    console.log(enteredCode);
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
    } else {
      await setEnteredCode([...codes, value].join(''));
    }
  };

  return (
    <div className={styles['enter-code']}>
      <Title level='2'>Код</Title>
      <Text level='l2' className={styles.info}>
        Введите последние 4 цифры звонившего номера.
      </Text>
      <div className={styles.code}>
        {codes.map((code, index) => (
          <Input
            code
            error='Error'
            key={index}
            maxLength={1}
            id={String(index)}
            value={code}
            placeholder='X'
            onChange={handleChangeInput}
          />
        ))}
      </div>
      <Button appearance='primary' width={240} height={48} onClick={onSubmit}>
        Войти
      </Button>
      <div className={styles['resend-code']}>
        <Text level='l2'>Отправить код ещё раз через:</Text>
        <Text level='l2' className={styles.timer}>
          59 секунд
        </Text>
      </div>
    </div>
  );
};
