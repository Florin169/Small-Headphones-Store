import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../../utils/cartUtils";

const initialState = {
  cartItems: [],
  cartToggle: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleHide: (state) => {
      state.cartToggle = false;
    },

    toggleShow: (state) => {
      state.cartToggle = true;
    },

    cartItems: (state, action) => {
      state.cartItems = addToCart(state.cartItems, action.payload);
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { toggleHide, toggleShow, cartItems, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
