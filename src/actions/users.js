export const loadAllUser = () => {
  return dispatch => {
    dispatch({ type: "LOAD_ALL_USERS_REQUEST" });
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: "LOAD_ALL_USERS_SUCCESS",
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: "LOAD_ALL_USERS_FAILURE",
          payload: error
        });
      });
  };
};
