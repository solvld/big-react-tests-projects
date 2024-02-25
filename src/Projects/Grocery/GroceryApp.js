import React, { useState } from 'react';
import './Grocery.css';
import { info } from './ProductsInfo.js';
import SearchBar from './Components/SearchBar';
import ProductTable from './Components/ProductTable';

export default function GroceryApp() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filterChange = event => {
    const updateFilter = event.target.value;
    setFilterText(updateFilter);
  };

  const inStockOnlyChange = event => {
    const checkValue = event.target.checked;
    setInStockOnly(checkValue);
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterChange={filterChange}
        onInStockOnlyChange={inStockOnlyChange}
      />
      <ProductTable
        infoObject={info}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
