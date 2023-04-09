import React from 'react';
import { Button, Input, InputPhone, Title } from '@shared/ui';
import { useSelector } from 'react-redux';
import { userState } from '@shared/store/selector';
import styles from './EditInfo.module.scss';

interface EditInfoProps {
  edit: (click: boolean) => void;
}

export const EditInfo = ({ edit }: EditInfoProps) => {
  const [value, setValue] = React.useState<string>('');
  const { user } = useSelector(userState);

  return (
    <div className={styles['edit-info']}>
      <Title level='3'>Изменение личных данных</Title>
      <div className={styles.inputs}>
        <Input id='user-name' text='Имя*' placeholder='Введите имя' />
        <InputPhone
          value={value}
          setValues={(e) => setValue(e.target.value)}
          name='Номер телефона'
          placeholder={user.phone}
        />
        <Input id='user-email' text='Почта*' placeholder='Введите почту' />
        <Input
          id='user-birthday'
          text='Дата рождения*'
          placeholder='Введите дату рождения'
        />
      </div>
      <Button
        appearance='primary'
        height={48}
        type='submit'
        onClick={() => edit(false)}
      >
        Сохранить изменения
      </Button>
    </div>
  );
};
