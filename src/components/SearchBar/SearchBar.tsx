import { useState } from 'react';

type Props = {
  onSearch: (search: string) => void;
};

export default function SearchBar(props: Props) {
  const { onSearch } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(search);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a product"
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={() => onSearch(search)}>
        Search
      </button>
    </div>
  );
}
