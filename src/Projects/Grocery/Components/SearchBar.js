import React from 'react';

function SearchBar(props) {
  return (
    <form className="SearchBar">
      <input
        type="text"
        placeholder="search..."
        value={props.filterText}
        onChange={props.onFilterChange}
      />
      <label>
        <input
          type="checkbox"
          checked={props.inStockonly}
          onChange={props.onInStockOnlyChange}
        />{' '}
        Only show product in stock
      </label>
    </form>
  );
}

export default SearchBar;
