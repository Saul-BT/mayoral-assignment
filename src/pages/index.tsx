import { useMemo, useState } from 'react';

import Head from 'next/head';
import { NextPage } from 'next';
import { Product } from 'models/product';
import ProductGrid from 'components/ProductGrid/ProductGrid';
import SearchBar from 'components/SearchBar/SearchBar';
import { Sort } from 'models/sort';
import SortButtons from 'components/SortButtons/SortButtons';
import { filterProducts } from 'lib/product';
import styles from '../styles/Home.module.css';

type PageProps = {
  products: Product[];
};

const HomePage: NextPage<PageProps> = ({ products }) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<Sort>(null);
  const filteredProducts = useMemo(() => filterProducts(products, search, sort), [search, sort]);

  return (
    <>
      <Head>
        <title>Mayoral Frontend Assignment</title>
      </Head>
      <header className={styles['header']}>
        <SearchBar onSearch={setSearch} />
        <SortButtons onSort={setSort} className={styles['sort-buttons']} />
      </header>
      {filteredProducts.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </>
  );
};

export async function getStaticProps() {
  const products = await import('../data/clothes.json').then((m) => m.default);

  return { props: { products } };
}

export default HomePage;
