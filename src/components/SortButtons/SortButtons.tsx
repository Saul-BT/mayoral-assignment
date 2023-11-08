import IconMinus from 'components/icons/IconMinus';
import IconPlus from 'components/icons/IconPlus';
import { Sort } from 'models/sort';
import { useState } from 'react';

import styles from './SortButtons.module.css';

type Props = {
  onSort: (sort: Sort) => void;
  className?: string;
};

export default function SortButtons({ onSort, className }: Props) {
  const [sortOrder, setSortOrder] = useState(null);

  const handleSort = (order) => {
    if (sortOrder === order) {
      setSortOrder(null);
      onSort(null);
    } else {
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
      >
        <IconMinus size={30} strokeWidth={5} />
      </button>
      <button
        onClick={() => handleSort('asc')}
        type="button"
        aria-label="Sort ascending"
        title="Sort ascending"
        data-active={sortOrder === 'asc'}
      >
        <IconPlus size={30} strokeWidth={5} />
      </button>
    </div>
  );
}
