export const loadUser = userId => {
  return dispatch => {
    dispatch({ type: "LOAD_USER_REQUEST" });
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: "LOAD_USER_SUCCESS",
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: "LOAD_USER_FAILURE",
          payload: error
        });
      });
  };
};
