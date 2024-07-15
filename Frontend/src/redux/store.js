import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './avltreeReducer'

export default configureStore({
  reducer: {
    avltree: counterSlice,
  }
})
