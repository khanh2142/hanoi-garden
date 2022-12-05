import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
  products: any[];
}

const initialState: Cart = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCard: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { addProductToCard } = cartSlice.actions;

export default cartSlice.reducer;
