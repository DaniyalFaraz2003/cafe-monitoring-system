import { createSlice } from '@reduxjs/toolkit'
import AVLTree from '../DataStructures/AVLTree'

export const counterSlice = createSlice({
  name: 'avltree',
  initialState: {
    value: new AVLTree(),
    result: []
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
    traverse: (state, action) => {
      const result = state.value.preorderTraversal();
      state.result = result;
    },
    filterByPrefix: (state, action) => {
      const result = state.value.prefixTraversal(action.payload);
      state.result = result;
    }
  },
})

export const { insert, search, traverse, filterByPrefix } = counterSlice.actions

export default counterSlice.reducer