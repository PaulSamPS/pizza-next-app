import axios, { AxiosError } from 'axios';
import React from 'react';
import { StepContext } from '@processes/Auth';

export const useSendCode = () => {
  const [error, setError] = React.useState<string>('');
  const { setPhone, nextStep, setUserId } = React.useContext(StepContext);

  const onSubmit = async (value: string): Promise<void> => {
    if (localStorage.getItem('code')) {
      localStorage.removeItem('code');
    }
    await axios
      .post(
        `${process.env.API_URL}/auth/send-code`,
        { phone: value },
        { withCredentials: true }
      )
      .then((res) => {
        setUserId(res.data.userId);
        localStorage.setItem('code', res.data.date);
        setPhone(value);
        nextStep();
      })
      .catch((e: AxiosError<{ message: string }>) => {
        setError(e.response?.data.message!);
      });
  };

  return {
    error,
    onSubmit,
  };
};
