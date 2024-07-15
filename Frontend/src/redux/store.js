import {configureStore} from '@reduxjs/toolkit'
import avltreeReducer from './avltreeReducer'

export default configureStore({
  reducer: {
    avltree: avltreeReducer,
  }
})
