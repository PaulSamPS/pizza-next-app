import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { Input, InputPhone } from '@components/Form';
import desktop from './PersonalDataDesktop.module.scss';
import mobile from './PersonalDataMobile.module.scss';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const PersonalData = () => {
  const { isDesktop } = useContext(DeviceContext);
  const [values, setValues] = React.useState<InputValueState>({
    formattedValue: '',
    value: '',
  });

  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes['personal-data']}>
      <Input id='name' text='Имя*' placeholder='Иван' />
      <InputPhone
        values={values}
        setValues={setValues}
        name='Номер телефона*'
      />
      <Input id='email' text='Почта*' placeholder='mail@gmail.com' />
    </div>
  );
};
