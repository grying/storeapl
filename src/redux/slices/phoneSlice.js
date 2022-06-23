import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhone = createAsyncThunk(
  "phone/fetchPhoneStatus",
  async () => {
    const response = await axios.get(
      "https://629356fb089f87a57abe7594.mockapi.io/items"
    );
    console.log(response);
    return response.data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};
console.log(initialState.items);
const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPhone.pending]: (state, action) => {
      console.log("wait");
      state.status = "loading";
      state.items = [];
    },
    [fetchPhone.fulfilled]: (state, action) => {
      console.log(state);
      state.items = action.payload;
      state.status = "ok";
    },
    [fetchPhone.rejected]: (state, action) => {
      alert("блокировка тотальна)");
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItem } = phoneSlice.actions;

export default phoneSlice.reducer;
