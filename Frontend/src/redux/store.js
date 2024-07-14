import { createStore, combineReducers } from 'redux';
import bstReducer from './bstReducer';


const rootReducer = combineReducers({
  bst: bstReducer
});

const store = createStore(rootReducer);

export default store;
