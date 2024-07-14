import { createSlice } from '@reduxjs/toolkit'
import BST from '../DataStructures/BST'


export const counterSlice = createSlice({
  name: 'bst',
  initialState: {
    value: new BST(),
  },
  reducers: {
    insert: (state, action) => {
      console.log("here");
      state.value.insert(action.payload)
    },
    search: (state, action) => {
      const result = state.value.search(action.payload);
      return {...state, result: result};
    },
  },
})

export const { insert, search } = counterSlice.actions

export default counterSlice.reducer