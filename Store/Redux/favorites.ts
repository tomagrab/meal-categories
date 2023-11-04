import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FavoritesState = {
  ids: string[];
};

type FavoriteActionPayload = {
  id: string;
};

const initialState: FavoritesState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteActionPayload>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<FavoriteActionPayload>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
