import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  heart: [],
  itemsFavorite: [],
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItemFavorite(state, action) {
      const findItem = state.itemsFavorite.find(
        (obj) => obj.id === action.payload.id
      );
      if (!findItem) {
        action.payload.favorite = true;
        state.itemsFavorite.push({
          ...action.payload,
          favorite: true,
          id: action.payload.id,
        });
      } else {
        state.itemsFavorite = state.itemsFavorite.filter(
          (obj) => obj.id !== action.payload.id
        );
          state.heart = state.heart.filter((obj) => obj !== action.payload.id);
      }
    },
    toggleHeart(state, action) {
      const hearts = state.heart.find(obj => obj ===action.payload.id);
      console.log(hearts);
      console.log(action.payload)

      if (hearts) {
           state.heart = state.heart.filter(
             (obj) => obj !== action.payload.id
           );
      } else {
        state.heart.push(action.payload.id);
      }
    },
  },
});

export const { addItemFavorite, toggleHeart } = favoriteSlice.actions;

export default favoriteSlice.reducer;
