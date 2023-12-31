import IconMinus from '../icons/IconMinus';
import IconPlus from '../icons/IconPlus';
import { Sort } from 'models/sort';
import styles from './SortButtons.module.css';
import { useState } from 'react';

type Props = {
  onSort?: (sort: Sort) => void;
  defaultValue?: Sort;
  className?: string;
};

export default function SortButtons({ onSort, defaultValue, className }: Props) {
  const [sortOrder, setSortOrder] = useState<Sort>(defaultValue || null);

  const handleSort = (order: Sort) => {
    if (sortOrder !== order) {
      setSortOrder(order);
      onSort(order);
    }
  };

  return (
    <div className={`${styles['sort-buttons']} ${className}`}>
      <button
        onClick={() => handleSort('desc')}
        type="button"
        aria-label="Sort descending"
        title="Sort descending"
        data-active={sortOrder === 'desc'}
        data-testid="sort-desc-button"
      >
        <IconMinus size={30} strokeWidth={5} />
      </button>
      <button
        onClick={() => handleSort('asc')}
        type="button"
        aria-label="Sort ascending"
        title="Sort ascending"
        data-active={sortOrder === 'asc'}
        data-testid="sort-asc-button"
      >
        <IconPlus size={30} strokeWidth={5} />
      </button>
    </div>
  );
}
