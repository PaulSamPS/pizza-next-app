import React, { useContext } from 'react';
import NumberFormat from 'react-number-format';
import { DeviceContext } from '@context';
import stylesDesktop from './InputPhoneDesktop.module.scss';
import stylesMobile from './InputPhoneMobile.module.scss';

type InputValueState = {
  formattedValue: string;
  value: string;
};

type InputPhoneProps = {
  values: InputValueState;
  setValues: (value: InputValueState) => void;
  name: string;
};

export const InputPhone = ({ values, setValues, name }: InputPhoneProps) => {
  const { isDesktop } = useContext(DeviceContext);

  const classes = isDesktop ? stylesDesktop : stylesMobile;

  return (
    <div className={classes.input}>
      <NumberFormat
        name='phone'
        format='+7 (###) ###-##-##'
        mask='_'
        placeholder='+7 (123) 456-78-90'
        value={values.formattedValue}
        autoComplete='off'
        onValueChange={({ formattedValue, value }) =>
          setValues({ formattedValue, value })
        }
      />
      <label htmlFor='phone'>{name}</label>
    </div>
  );
};
