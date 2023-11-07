import { Product } from 'models/product';
import Image from 'next/image';

import styles from './Product.module.css';
import { formatEur, getOfferObject } from 'lib/money';
import { useMemo } from 'react';

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  const { name, image, price, discount, hasMoreColors } = product;
  const offer = useMemo(() => getOfferObject(price, discount), [price, discount]);

  return (
    <article className={styles.product}>
      <figure>
        <Image src={image} alt={name} width={300} height={300} />
        <figcaption className={styles.title}>{name}</figcaption>
      </figure>
      {offer.discountPercentage ? (
        <>
          <p className={styles['previous-price']}>{offer.previousPrice}</p>
          <p className={styles['current-offer']}>
            {offer.currentPrice} ({offer.discountPercentage})
          </p>
        </>
      ) : (
        <p className={styles['price']}>{formatEur(price)}</p>
      )}
      {hasMoreColors && <p className={styles['more-colors']}>más colores</p>}
      <button className={styles['button-add']} type="button">
        Añadir
      </button>
    </article>
  );
}
