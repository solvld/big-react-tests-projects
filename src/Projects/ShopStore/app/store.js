import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../features/inventory/inventorySlice.js';
import cartReducer from '../features/cart/cartSlice.js';
import currencyFilterReducer from '../features/currencyFilter/currencyFilterSlice.js';

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
  },
});

export default store;
