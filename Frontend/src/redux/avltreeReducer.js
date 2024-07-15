import { createSlice } from "@reduxjs/toolkit";
import AVLTree from "../DataStructures/AVLTree";

export const counterSlice = createSlice({
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
    traverse: (state, action) => {
      const result = state.value.preorderTraversal();
      action.payload = result;
    },
    filterByPrefix: (state, action) => {
      const result = state.value.prefixTraversal(action.payload);
      action.payload = result;
    }
  },
});

export const { insert, search, traverse, filterByPrefix} = counterSlice.actions

export default counterSlice.reducer
