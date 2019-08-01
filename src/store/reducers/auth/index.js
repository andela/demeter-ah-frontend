const initState = {
  error: null,
  user: {},
  isAuthenticated: false,
  isSubmit: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isSubmit: false,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    case 'CLEAN_UP':
      return {
        ...initState
      };
    case 'SIGNUP':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
