import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store.js';

import { Inventory } from '../features/inventory/Inventory.jsx';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.jsx';
import { Cart } from '../features/cart/Cart.jsx';

const ShopStoreApp = () => {
  const {state,dispatch } = {}

  return (
    <Provider store={store}>
      <div>
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
    </Provider>
  );
};

export default ShopStoreApp;
