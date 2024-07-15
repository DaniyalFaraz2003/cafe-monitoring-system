import { createSlice } from "@reduxjs/toolkit";
import AVLTree from "../DataStructures/AVLTree";

export const avlTreeSlice = createSlice({
  name: "avltree",
  initialState: {
    value: new AVLTree(),
    searchResult: [],
    error: null,
  },
  reducers: {
    insert: (state, action) => {
      state.value.insert(action.payload);
    },
    search: (state, action) => {
      const result = state.value.search(parseInt(action.payload));
      console.log('Search result:', result);
      action.payload = result;
    },
    searchRange: (state, action) => {
      const { start, end } = action.payload;
      const results = state.value.searchRange(parseInt(start), parseInt(end));
      state.searchResult = results ? results : [];
    },
    updateSearchResultInvalid: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { insert, search, searchRange, updateSearchResultInvalid } = avlTreeSlice.actions;
export default avlTreeSlice.reducer;
