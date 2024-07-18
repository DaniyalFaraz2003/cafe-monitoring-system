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
      action.payload = result;
    },
    traverse: (state, action) => {
      // by this reducer, we can traverse the tree in preorder means root, left, right
      const result = state.value.preorderTraversal();
      state.result = result;
    },
    filterByPrefix: (state, action) => {
      const result = state.value.prefixTraversal(action.payload);
      state.result = result;
    },
    filterByTime: (state, action) => {
      // by this reducer, we can filter the tree by time
      const result = state.value.timeTraversal(action.payload);
      state.result = result;
    },
    signin: (state, action) => {
      state.loggedIn = true;
      // this 
      state.city = action.payload;
    },
    signout: (state, action) => {
      state.loggedIn = false;
      state.city = null;
      state.value = new AVLTree();
    }
  },
});

export const { insert, search, traverse, filterByPrefix, signin, signout, filterByTime } = counterSlice.actions

export default counterSlice.reducer
