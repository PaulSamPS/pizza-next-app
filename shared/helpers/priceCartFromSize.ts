export const priceCartFromSize = (size: string) => {
  if (size === '25 см') {
    return 0;
  }
  if (size === '30 см') {
    return 1;
  }
  if (size === '35 см') {
    return 2;
  }

  return 0;
};
