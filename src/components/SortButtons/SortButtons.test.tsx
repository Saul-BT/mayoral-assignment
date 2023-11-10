import { fireEvent, render } from '@testing-library/react';

import SortButtons from './SortButtons';

describe('SortButtons', () => {
  const onSortMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    const { getByTestId } = render(<SortButtons onSort={onSortMock} />);
    expect(getByTestId('sort-asc-button')).toBeInTheDocument();
    expect(getByTestId('sort-desc-button')).toBeInTheDocument();
  });

  it('should call onSort with "asc" when clicking the "sort ascending" button', () => {
    const { getByTestId } = render(<SortButtons onSort={onSortMock} />);
    const sortAscButton = getByTestId('sort-asc-button');
    fireEvent.click(sortAscButton);
    expect(onSortMock).toHaveBeenCalledWith('asc');
  });

  it('should call onSort with "desc" when clicking the "sort descending" button', () => {
    const { getByTestId } = render(<SortButtons onSort={onSortMock} />);
    const sortDescButton = getByTestId('sort-desc-button');
    fireEvent.click(sortDescButton);
    expect(onSortMock).toHaveBeenCalledWith('desc');
  });

  it('should render with the default value if provided', () => {
    const defaultValue = 'desc';
    const { getByTestId } = render(<SortButtons defaultValue={defaultValue} />);
    const sortDescButton = getByTestId('sort-desc-button');
    expect(sortDescButton).toHaveAttribute('data-active', 'true');
  });

  it('should render with no default value if not provided', () => {
    const { getByTestId } = render(<SortButtons />);
    const sortDescButton = getByTestId('sort-desc-button');
    expect(sortDescButton).toHaveAttribute('data-active', 'false');
  });
});
