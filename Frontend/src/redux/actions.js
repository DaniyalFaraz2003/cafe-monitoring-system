export const INSERT_EMPLOYEE = 'INSERT_EMPLOYEE';
export const SEARCH_EMPLOYEE = 'SEARCH_EMPLOYEE';
export const UPDATE_SEARCH_RESULT_INVALID = 'UPDATE_SEARCH_RESULT_INVALID';

export const insertEmployee = (employee) => ({
  type: INSERT_EMPLOYEE,
  payload: employee
});

export const searchEmployee = (empId) => ({
  type: SEARCH_EMPLOYEE,
  payload: empId
});

export const updateSearchResultInvalid = (errorMessage) => ({
  type: UPDATE_SEARCH_RESULT_INVALID,
  payload: errorMessage
});