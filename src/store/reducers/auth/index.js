const initState = {
  error: null,
  user: {},
  isAuthenticated: false
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'CLEAN_UP':
      return {
        error: null,
        user: {},
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
