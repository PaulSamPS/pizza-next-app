import React from 'react';

export const useSelectSize = (size: string) => {
  const [currentSize, setCurrentSize] = React.useState('');

  React.useEffect(() => {
    switch (size) {
      case '25 см':
        return setCurrentSize('small');
      case '30 см':
        return setCurrentSize('medium');
      case '35 см':
        return setCurrentSize('large');

      default:
        return setCurrentSize('small');
    }
  }, [size, currentSize]);

  return { currentSize };
};
