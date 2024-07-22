import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "avltree",
  initialState: {
    loggedIn: false,
    city: null,
    capacity: [0, 0]
  },
  reducers: {
    signin: (state, action) => {
      state.loggedIn = true;
      state.city = action.payload;
    },
    signout: (state, action) => {
      state.loggedIn = false;
      state.city = null;
    },
    setCapacity: (state, action) => {
      const [diet, normal] = action.payload;
      state.capacity = [diet, normal];
    }
  },  
});

export const { setCapacity, signin, signout } = counterSlice.actions

export default counterSlice.reducer
