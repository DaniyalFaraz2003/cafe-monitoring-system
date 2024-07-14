export const INSERT_EMPLOYEE = 'INSERT_EMPLOYEE';
export const SEARCH_EMPLOYEE = 'SEARCH_EMPLOYEE';
export const UPDATE_SEARCH_RESULT_INVALID = 'UPDATE_SEARCH_RESULT_INVALID';

// here we are defining the action creators for the actions
export const insertEmployee = (empId) => ({
  type: INSERT_EMPLOYEE,
  // here we are passing the employee object as a payload from 
  payload: empId
});

export const searchEmployee = (empId) => ({
  type: SEARCH_EMPLOYEE,
  payload: empId
});

export const updateSearchResultInvalid = (errorMessage) => ({
  type: UPDATE_SEARCH_RESULT_INVALID,
  payload: errorMessage
});