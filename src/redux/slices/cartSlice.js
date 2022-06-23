import { createSlice } from "@reduxjs/toolkit";

const local = JSON.parse(localStorage.getItem("cart")) || [];

const calkTotalPrice = (items) =>
  items.reduce((sum, obj) => obj.price * obj.count + sum, 0);

const initialState = {
  totalPrice: calkTotalPrice(local),
  items: local,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calkTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calkTotalPrice(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calkTotalPrice(state.items);
    },
  },
});

export const { addItem, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
