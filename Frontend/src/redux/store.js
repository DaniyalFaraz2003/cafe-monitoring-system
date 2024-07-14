import {configureStore} from '@reduxjs/toolkit'
import bstReducer from './avltreeReducer'

export default configureStore({
  reducer: {
    bst: bstReducer,
  }
})
