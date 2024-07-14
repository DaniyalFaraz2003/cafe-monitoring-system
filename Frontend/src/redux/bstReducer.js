import BST from '../DataStructures/BST'; // Adjust this path
import { insertEmployee, searchEmployee ,updateSearchResultInvalid} from './actions';


const initialState = {
  bst: new BST(),
  searchResult: null
};

const bstReducer = (state = initialState, action) => {
  // here we are updating the state of the bst by inserting a new employee
  switch (action.type) {
    case insertEmployee:
      state.bst.insert(action.payload);
      return { ...state };
      // here we are updating the state of the bst by searching for an employee
    case searchEmployee:
      const result = state.bst.search(action.payload);
      return { ...state, searchResult: result };
      // here we are updating the state of the bst by invalidating the search result
    case updateSearchResultInvalid:
        return { ...state, searchResult: action.payload };
        

    default:
      return state;
  }
};

export default bstReducer;
