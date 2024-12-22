import { configureStore } from '@reduxjs/toolkit'
import shirts from './shirtsSlice';
import cart from './cartSlice';
import favorite from './favoriteSlice';

export const store = configureStore({
    reducer: {
    shirts,
    cart,
    favorite
  }
})