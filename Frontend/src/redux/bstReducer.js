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
      return { ...state }
    },
    search: (state, action) => { // currently under development
      console.log(action.payload);
      const result = state.value.search(parseInt(action.payload));
      console.log(result);
      return { ...state, result: result };
    },
  },
})

export const { insert, search } = counterSlice.actions

export default counterSlice.reducer