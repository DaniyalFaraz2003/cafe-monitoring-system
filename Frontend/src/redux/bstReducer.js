import BST from '../DataStructures/BST'; // Adjust this path
import { insertEmployee, searchEmployee ,updateSearchResultInvalid} from './actions';


const initialState = {
  bst: new BST(),
  searchResult: null
};

const bstReducer = (state = initialState, action) => {
  switch (action.type) {
    case insertEmployee:
      state.bst.insert(action.payload);
      return { ...state };
    case searchEmployee:
      const result = state.bst.search(action.payload);
      return { ...state, searchResult: result };
    default:
      return state;
  }
};

export default bstReducer;
