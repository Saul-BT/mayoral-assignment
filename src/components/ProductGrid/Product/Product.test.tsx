import { render, screen } from '@testing-library/react';

import { Product } from 'models/product';
import ProductItem from './Product';

jest.mock('../../../lib/money', () => ({
    formatEur: jest.fn((price: number) => `${price},00 €`),
    getOfferObject: jest.fn((price: number, discount: number) => ({
        previousPrice: discount && `${price},00 €`,
        currentPrice: `${price - discount},00 €`,
        discountPercentage: discount && `${discount}%`,
    })),
}));

const product: Product = {
    id: 0,
    name: 'Test Product',
    image: '/test-image.jpg',
    price: 100,
    discount: 10,
    hasMoreColors: true,
};

describe('ProductItem', () => {
    it('renders product name', () => {
        render(<ProductItem product={product} />);
        const productName = screen.getByTestId('product-name');
        expect(productName).toHaveTextContent('Test Product');
    });

    it('renders product price with discount', () => {
        render(<ProductItem product={product} />);
        const productPrice = screen.getByTestId('product-current-offer');
        expect(productPrice).toHaveTextContent('90,00 € (10%)');
    });

    it('renders product price without discount', () => {
        const productWithoutDiscount: Product = {
            ...product,
            discount: 0,
        };
        render(<ProductItem product={productWithoutDiscount} />);
        const productPrice = screen.getByTestId('product-price');
        expect(productPrice).toHaveTextContent('100,00 €');
    });

    it('renders "más colores" when product has more colors', () => {
        render(<ProductItem product={product} />);
        const moreColors = screen.getByTestId('product-more-colors');
        expect(moreColors).toBeInTheDocument();
    });

    it('does not render "más colores" when product does not have more colors', () => {
        const productWithoutMoreColors: Product = {
            ...product,
            hasMoreColors: false,
        };
        render(<ProductItem product={productWithoutMoreColors} />);
        const moreColors = screen.queryByTestId('product-more-colors');
        expect(moreColors).not.toBeInTheDocument();
    });
});
