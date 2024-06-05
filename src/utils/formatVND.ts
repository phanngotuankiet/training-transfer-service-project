export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

export const formatCurrencyK = (amount: number) => {
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(3).replace(/\.?0+$/, '') + 'M';
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(3).replace(/\.?0+$/, '') + 'K';
  }
  return amount.toString();
};
