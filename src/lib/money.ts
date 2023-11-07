import { Offer } from 'models/offer';

export const formatEur = (price: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};

export const getOfferObject = (price: number, discount: number): Offer => {
  if (discount === 0) {
    return { currentPrice: formatEur(price) };
  }
  const previousPrice = formatEur(price);
  const currentPrice = formatEur(price * (1 - discount / 100));
  const discountPercentage = `-${discount}%`;

  return { previousPrice, currentPrice, discountPercentage };
};
