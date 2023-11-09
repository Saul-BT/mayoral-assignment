import { fireEvent, render, waitFor } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should call onSearch with the input value when the search term changes', () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} />);
    const input = getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'test' } });

    waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledWith('test');
    });
  });

  it('should call onSearch with an empty string when the input is cleared', () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} />);
    const input = getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.change(input, { target: { value: '' } });

    waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledWith('');
    });
  });
});
