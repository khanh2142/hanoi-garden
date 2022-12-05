import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducers/cart";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
