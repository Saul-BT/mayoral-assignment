import { useEffect, useState } from 'react';

import IconSearch from '../icons/IconSearch';
import styles from './SearchBar.module.css';

type Props = {
  onSearch: (search: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(search);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, onSearch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles['search-bar']}>
      <IconSearch className={styles['search-icon']} size={20} />
      <input type="search" placeholder="Buscar" value={search} onChange={handleSearch} data-testid="search-input"
       />
    </div>
  );
}
