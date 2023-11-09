import { formatEur, getOfferObject } from '../../../lib/money';

import Image from 'next/image';
import { Product } from 'models/product';
import styles from './Product.module.css';
import { useMemo } from 'react';

type Props = {
  product: Product;
};

const placeholderImage =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0iI2ViZWJlYiI+PC9wYXRoPgogICA8cGF0aCBkPSJNMTUgNGw2IDJ2NWgtM3Y4YTEgMSAwIDAgMSAtMSAxaC0xMGExIDEgMCAwIDEgLTEgLTF2LThoLTN2LTVsNiAtMmEzIDMgMCAwIDAgNiAwIj48L3BhdGg+Cjwvc3ZnPg==';

export default function ProductItem({ product }: Props) {
  const { name, image, price, discount, hasMoreColors } = product;
  const offer = useMemo(() => getOfferObject(price, discount), [price, discount]);

  return (
    <article className={styles.product} data-testid="product-item">
      <figure data-testid="product-image">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          objectFit="cover"
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
        <figcaption className={styles.title} data-testid="product-name">
          {name}
        </figcaption>
      </figure>
      {offer.discountPercentage ? (
        <div data-testid="product-offer">
          <p className={styles['previous-price']} data-testid="product-previous-price">
            {offer.previousPrice}
          </p>
          <p className={styles['current-offer']} data-testid="product-current-offer">
            {offer.currentPrice} ({offer.discountPercentage})
          </p>
        </div>
      ) : (
        <p className={styles['price']} data-testid="product-price">
          {formatEur(price)}
        </p>
      )}
      {hasMoreColors && (
        <p className={styles['more-colors']} data-testid="product-more-colors">
          más colores
        </p>
      )}
      <button className={styles['button-add']} type="button" data-testid="product-add-button">
        Añadir
      </button>
    </article>
  );
}
