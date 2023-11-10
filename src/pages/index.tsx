import { useMemo, useState } from 'react';

import Head from 'next/head';
import { NextPage } from 'next';
import { Product } from 'models/product';
import ProductGrid from 'components/ProductGrid/ProductGrid';
import SearchBar from 'components/SearchBar/SearchBar';
import { Sort } from 'models/sort';
import SortButtons from 'components/SortButtons/SortButtons';
import { filterProducts } from 'lib/product';
import getConfig from 'next/config';
import styles from '../styles/Home.module.css';

type PageProps = {
  products: Product[];
  fetchError?: boolean;
};

const HomePage: NextPage<PageProps> = ({ products, fetchError }) => {
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
      {fetchError && <p>Ha ocurrido un error al cargar los productos</p>}
      {!fetchError && (filteredProducts.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      ))}
    </>
  );
};

export async function getStaticProps(): Promise<{ props: PageProps; revalidate: number }> {
  const {
    serverRuntimeConfig: { api },
  } = getConfig();
  try {
    const response = await fetch(api.clothes);
    const products = await response.json();
    return { props: { products }, revalidate: 60 };
  } catch (error) {
    console.error(error);
    return { props: { products: [], fetchError: true }, revalidate: 60 };
  }
}

export default HomePage;
