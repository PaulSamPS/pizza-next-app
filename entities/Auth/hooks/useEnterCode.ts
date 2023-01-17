import React, { ChangeEvent } from 'react';
import { StepContext } from '@context';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';

export const useEnterCode = () => {
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const { userId } = React.useContext(StepContext);
  const router = useRouter();

  const onSubmit = async () => {
    setIsLoading(true);
    await axios
      .post(
        `${process.env.API_URL}/auth/enter-code`,
        { code: codes.join(''), userId },
        { withCredentials: true }
      )
      .then(() => {
        localStorage.removeItem('code');
        router.push(`${router.pathname}/`);
      })
      .catch((e: AxiosError<{ message: string }>) => {
        setError(e.response?.data.message!);
        setCodes(['', '', '', '']);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleInputCode = async (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const { value } = event.target;
    setError(null);
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };

  return { error, handleInputCode, isLoading, codes, onSubmit };
};
