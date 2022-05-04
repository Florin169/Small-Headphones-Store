import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products,getProducts",
  async (dispatch, getState) => {
    return await fetch(" https://api.npoint.io/5d9d4a4c0dbe4405870c").then(
      (res) => res.json()
    );
  }
);

const initialState = {
  products: [],
  quantity: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increase: (state) => {
      state.quantity = state.quantity + 1;
    },

    decrease: (state) => {
      state.quantity = state.quantity === 0 ? 0 : state.quantity - 1;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { increase, decrease } = productsSlice.actions;

export default productsSlice.reducer;
