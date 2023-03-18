import React from 'react';
import moment from 'moment';

export const useCodeTimer = () => {
  const [minutes, setMinutes] = React.useState<number | string>('');
  const [seconds, setSeconds] = React.useState<number | string>('');
  const [isStopTimer, setIsStopTimer] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsStopTimer(true);
  }, []);

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (localStorage.getItem('code')) {
      const millis = Math.abs(
        Number(
          moment(localStorage.getItem('code')).add('2', 'minutes').toDate()
        ) - Date.now()
      );
      const interval = setInterval(() => {
        if (
          moment(localStorage.getItem('code'))
            .add('2', 'minutes')
            .format('h:mm:ss') >= moment(Date.now()).format('h:mm:ss')
        ) {
          setMinutes(Math.floor(millis / 60000));
          setSeconds(Number(((millis % 60000) / 1000 - 1).toFixed(0)));
        } else {
          setIsStopTimer(false);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
      setIsStopTimer(false);
  }, [seconds]);

  return {
    minutes,
    seconds,
    isStopTimer,
  };
};
