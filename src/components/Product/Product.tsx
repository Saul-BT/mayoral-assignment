import { Product } from 'models/product';
import Image from 'next/image';

import styles from './Product.module.css';
import { formatEur, getOfferObject } from '../../lib/money';
import { useMemo } from 'react';

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  const { name, image, price, discount, hasMoreColors } = product;
  const offer = useMemo(() => getOfferObject(price, discount), [price, discount]);

  return (
    <article className={styles.product} data-testid="product-item">
      <figure data-testid="product-image">
        <Image src={image} alt={name} width={300} height={300} objectFit='cover' />
        <figcaption className={styles.title} data-testid="product-name">{name}</figcaption>
      </figure>
      {offer.discountPercentage ? (
        <div data-testid="product-offer">
          <p className={styles['previous-price']} data-testid="product-previous-price">{offer.previousPrice}</p>
          <p className={styles['current-offer']} data-testid="product-current-offer">
            {offer.currentPrice} ({offer.discountPercentage})
          </p>
        </div>
      ) : (
        <p className={styles['price']} data-testid="product-price">{formatEur(price)}</p>
      )}
      {hasMoreColors && <p className={styles['more-colors']} data-testid="product-more-colors">más colores</p>}
      <button className={styles['button-add']} type="button" data-testid="product-add-button">
        Añadir
      </button>
    </article>
  );
}
