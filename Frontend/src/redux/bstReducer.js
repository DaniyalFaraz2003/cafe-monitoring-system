import { createSlice } from '@reduxjs/toolkit'
import BST from '../DataStructures/BST'

export const counterSlice = createSlice({
  name: 'bst',
  initialState: {
    value: new BST(),
  },
  reducers: {
    insert: (state, action) => { // insert reducer is working perfectly fine
      state.value.insert(action.payload)
    },
    search: (state, action) => { // currently under development
      //state.value.search means that we are calling the search method of the BST class
      const result = state.value.search(parseInt(action.payload));
      action.payload = result;
    },
  },
})

export const { insert, search } = counterSlice.actions

export default counterSlice.reducer