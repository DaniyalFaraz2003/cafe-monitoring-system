export const INSERT_EMPLOYEE = 'INSERT_EMPLOYEE';
export const SEARCH_EMPLOYEE = 'SEARCH_EMPLOYEE';
export const UPDATE_SEARCH_RESULT_INVALID = 'UPDATE_SEARCH_RESULT_INVALID';
export const SEARCH_RANGE='SEARCH_RANGE';
// here we are defining the action creators for the actions
//its purpose inserting employee from which component it is called 
export const insertEmployee = (empId) => ({
  type: INSERT_EMPLOYEE,
  // here we are passing the employee object as a payload from  the component
  payload: empId
});
//searchEmployee action creator is used to search for an employee in the BST it takes the employee id as a parameter
export const searchEmployee = (empId) => ({
  type: SEARCH_EMPLOYEE,
  payload: empId
});


export const searchRange = (start, end) => ({
  type: SEARCH_RANGE,
  payload: { start, end }
});
export const updateSearchResultInvalid = (errorMessage) => ({
  type: UPDATE_SEARCH_RESULT_INVALID,
  payload: errorMessage
});