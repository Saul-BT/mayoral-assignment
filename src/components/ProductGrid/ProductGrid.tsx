import ProductItem from 'components/Product/Product';
import { Product } from 'models/product';

import styles from './ProductGrid.module.css';

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <section className={styles['product-grid']}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
