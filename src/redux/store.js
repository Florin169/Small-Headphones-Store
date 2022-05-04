import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productsSlice from "./features/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export default store;
