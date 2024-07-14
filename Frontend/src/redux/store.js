import {configureStore} from '@reduxjs/toolkit'
import bstReducer from './bstReducer'

export default configureStore({
  reducer: {
    bst: bstReducer,
  }
})
