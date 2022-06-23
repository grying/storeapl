import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import phone from "./slices/phoneSlice";
import favorite from "./slices/favoriteSlice";
export const store = configureStore({
  reducer: {
    cart,
    phone,
    favorite,
  },
  devTools: process.env.NODE_ENV !== "production",
});
