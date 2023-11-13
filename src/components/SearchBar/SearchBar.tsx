import IconSearch from '../icons/IconSearch';
import styles from './SearchBar.module.css';
import useDebounceCallback from 'hooks/useDebounceCallback';

type Props = {
  onSearch?: (search: string) => void;
  defaultValue?: string;
};

export default function SearchBar({ defaultValue, onSearch }: Props) {
  const debouncedSearch = useDebounceCallback((search: string) => onSearch?.(search));

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return (
    <div className={styles['search-bar']}>
      <IconSearch className={styles['search-icon']} size={20} />
      <input
        type="search"
        placeholder="Buscar"
        defaultValue={defaultValue}
        onChange={handleSearch}
        data-testid="search-input"
      />
    </div>
  );
}
