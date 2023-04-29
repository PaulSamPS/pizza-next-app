import React, { useContext } from 'react';
import { Button, Input, InputPhone, Title } from '@shared/ui';
import { useSelector } from 'react-redux';
import { userState } from '@shared/store/selector';
import { DeviceContext } from '@shared/context';
import desktop from './EditInfoDesktop.module.scss';
import mobile from './EditInfoMobile.module.scss';

interface EditInfoProps {
  edit: (click: boolean) => void;
}

export const EditInfo = ({ edit }: EditInfoProps) => {
  const [value, setValue] = React.useState<string>('');
  const { user } = useSelector(userState);
  const { isDesktop } = useContext(DeviceContext);

  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes['edit-info']}>
      <Title level='3'>Изменение личных данных</Title>
      <div className={classes.inputs}>
        <Input
          id='user-name'
          text='Имя*'
          placeholder={user.name ? user.name : 'Введите имя'}
        />
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
