const initialState = {
  loading: false,
  data: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_USERS_REQUEST":
      return { ...state, loading: true };
    case "LOAD_ALL_USERS_SUCCESS":
      return { ...state, data: action.payload, loading: false };
    case "LOAD_ALL_USERS_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
