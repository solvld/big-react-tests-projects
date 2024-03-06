import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../Projects/ShopStore/features/inventory/inventorySlice.js';
import cartReducer from '../Projects/ShopStore/features/cart/cartSlice.js';
import currencyFilterReducer from '../Projects/ShopStore/features/currencyFilter/currencyFilterSlice.js';

import articlePreviewsReducer from '../Projects/NewsReader/features/articlePreviews/articlePreviewsSlice.js';
import currentArticleReducer from '../Projects/NewsReader/features/currentArticle/currentArticleSlice.js';
import commentsReducer from '../Projects/NewsReader/features/comments/commentsSlice.js';

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,

    articlePreviews: articlePreviewsReducer,
    currentArticle: currentArticleReducer,
    comments: commentsReducer,
  },
});

export default store;
