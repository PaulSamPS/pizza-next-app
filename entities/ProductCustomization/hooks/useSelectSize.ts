import React from 'react';

export const useSelectSize = (size: string) => {
  const [currentSize, setCurrentSize] = React.useState<string>('');
  const [sizeIndex, setSizeIndex] = React.useState<number>(0);

  const small = () => {
    setCurrentSize('small');
    setSizeIndex(0);
  };

  const medium = () => {
    setCurrentSize('medium');
    setSizeIndex(1);
  };

  const large = () => {
    setCurrentSize('large');
    setSizeIndex(2);
  };

  React.useEffect(() => {
    switch (size) {
      case '25 см':
        return small();
      case '30 см':
        return medium();
      case '35 см':
        return large();

      default:
        return small();
    }
  }, [size, currentSize]);

  return { currentSize, sizeIndex };
};
