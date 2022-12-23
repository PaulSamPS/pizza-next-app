export const selectSize = (size: string) => {
  switch (size) {
    case '25 см':
      return 'small';
    case '30 см':
      return 'medium';
    case '35 см':
      return 'large';

    default:
      return 'small';
  }
};
