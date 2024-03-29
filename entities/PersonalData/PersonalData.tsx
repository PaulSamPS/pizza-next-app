import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import type { DeliveryFrom, FormProps } from '@shared/types';
import { Controller } from 'react-hook-form';
import { Input, InputPhone } from '@shared/ui';
import { useSelector } from 'react-redux';
import { userState } from '@shared/store/selector';
import desktop from './PersonalDataDesktop.module.scss';
import mobile from './PersonalDataMobile.module.scss';

interface PersonalDataProps
  extends Omit<FormProps<DeliveryFrom>, 'handleSubmit'> {}

export const PersonalData = ({
  register,
  errors,
  control,
}: PersonalDataProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const { user } = useSelector(userState);

  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes['personal-data']}>
      <Input
        {...register('name', {
          required: { value: true, message: 'Введите имя' },
        })}
        error={errors.name}
        id='name'
        text='Имя*'
        placeholder='Иван'
      />
      <Controller
        name='phone'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputPhone
            placeholder={user.phone}
            value={value}
            setValues={onChange}
            name='Номер телефона*'
          />
        )}
      />
      <Input
        {...register('email', {
          required: { value: true, message: 'Введите email' },
        })}
        error={errors.email}
        id='email'
        text='Почта*'
        placeholder='mail@gmail.com'
      />
    </div>
  );
};
