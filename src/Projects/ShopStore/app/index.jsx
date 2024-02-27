import React from 'react';

import { Inventory } from '../features/inventory/Inventory.jsx';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.jsx';
import { Cart } from '../features/cart/Cart.jsx';
import { store } from './store.js';

import '../style.css';

const ShopStoreApp = () => {
  const state = store.getState();
  const dispatch = store.dispatch;

  return (
    <div id="app">
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};

export default ShopStoreApp;
