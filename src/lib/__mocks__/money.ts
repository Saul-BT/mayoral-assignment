export const formatEur = jest.fn((price: number) => `${price},00 €`);
export const getOfferObject = jest.fn((price: number, discount: number) => ({
  previousPrice: discount && `${price},00 €`,
  currentPrice: `${price - discount},00 €`,
  discountPercentage: discount && `${discount}%`,
}));
