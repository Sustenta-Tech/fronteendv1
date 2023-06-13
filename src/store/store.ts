import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { tokenReducer } from './tokens/tokensReducer';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    tokens: tokenReducer,
  },
});

export default store;
