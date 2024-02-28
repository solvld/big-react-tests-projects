import React from 'react';

import { Inventory } from '../features/inventory/Inventory.jsx';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.jsx';
import { Cart } from '../features/cart/Cart.jsx';

import '../style.css';

const ShopStoreApp = () => {
  return (
    <div id="app">
      <CurrencyFilter />
      <Inventory />
      <Cart />
    </div>
  );
};

export default ShopStoreApp;
