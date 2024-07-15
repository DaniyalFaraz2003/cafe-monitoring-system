import { createSlice } from "@reduxjs/toolkit";
import AVLTree from "../DataStructures/AVLTree";

export const counterSlice = createSlice({
  name: "avltree",
  initialState: {
    value: new AVLTree(),
    result: [],
    loggedIn: false,
    city: null
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
      state.result = result;
    },
    filterByPrefix: (state, action) => {
      const result = state.value.prefixTraversal(action.payload);
      state.result = result;
    },
    signin: (state, action) => {
      state.loggedIn = true;
      state.city = action.payload;
    },
    signout: (state, action) => {
      state.loggedIn = false;
      state.city = null;
    }
  },
});

export const { insert, search, traverse, filterByPrefix, signin, signout } = counterSlice.actions

export default counterSlice.reducer
