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

export const { insert, search, signin, signout } = counterSlice.actions

export default counterSlice.reducer
