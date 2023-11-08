import { Product } from 'models/product';
import { Sort } from 'models/sort';

export const compareByPrice = (a: Product, b: Product) => {
  const priceA = a.price * (1 - a.discount / 100);
  const priceB = b.price * (1 - b.discount / 100);

  return priceA - priceB;
};

export const partialMatchByName = (name: string, search: string) => {
  const nameNormalized = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const searchNormalized = search.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return nameNormalized.toLowerCase().includes(searchNormalized.toLowerCase());
};

export const filterProducts = (products: Product[], search: string, sort: Sort) => {
  if (!products) return [];

  let filteredProducts = products;

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      partialMatchByName(product.name, search),
    );
  }

  if (sort) {
    filteredProducts = filteredProducts.sort((a, b) =>
      sort === 'asc' ? compareByPrice(a, b) : compareByPrice(b, a),
    );
  }

  return filteredProducts;
};
