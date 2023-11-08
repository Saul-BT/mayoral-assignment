import ProductGrid from 'components/ProductGrid/ProductGrid';
import SearchBar from 'components/SearchBar/SearchBar';
import SortButtons from 'components/SortButtons/SortButtons';
import useFetch from 'hooks/useFetch';
import { Product } from 'models/product';
import { NextPage } from 'next';
import { useMemo, useState } from 'react';

import getConfig from 'next/config';

import styles from '../styles/Home.module.css';
import { Sort } from 'models/sort';
import { filterProducts } from 'lib/product';
import Head from 'next/head';
const {
  publicRuntimeConfig: { api },
} = getConfig();

const HomePage: NextPage = () => {
  const { data, error, loading } = useFetch<Product[]>(api.clothes);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<Sort>(null);
  const products = useMemo(() => filterProducts(data, search, sort), [data, search, sort]);

  return (
    <>
      <Head>
        <title>Mayoral Frontend Assignment</title>
      </Head>
      <header className={styles['header']}>
        <SearchBar onSearch={setSearch} />
        <SortButtons onSort={setSort} className={styles['sort-buttons']} />
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {!loading && !error && products.length === 0 && <p>No hay productos</p>}
      {products.length > 0 && <ProductGrid products={products} />}
    </>
  );
};

export default HomePage;
