import { Product } from 'models/product';
import ProductGrid from './ProductGrid';
import { render } from '@testing-library/react';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    discount: 1,
    image: '/test-image.jpg',
    hasMoreColors: true,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    discount: 2,
    image: '/test-image.jpg',
    hasMoreColors: false,
  },
];

describe('ProductGrid', () => {
    it('renders a grid of products', () => {
        const { getAllByTestId } = render(<ProductGrid products={mockProducts} />);
        const productItems = getAllByTestId('product-item');
        expect(productItems).toHaveLength(mockProducts.length);
    });
});
