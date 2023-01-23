import {
  Control,
  FieldErrors,
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegister,
} from 'react-hook-form';
import React from 'react';

export interface DeliveryFrom {
  street: string;
  house: string;
  entrance: string;
  level: string;
  apartment: string;
  intercom: string;
  howSoon: string;
  payment: string;
  change: string;
  changeMoney: string;
  comment: string;
  name: string;
  email: string;
  phone: string;
}

export interface FormProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  control: Control<T, any>;
  errors: FieldErrors<T>;
  handleSubmit: (
    onValid: SubmitHandler<T>,
    onInvalid?: SubmitErrorHandler<T>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
}
