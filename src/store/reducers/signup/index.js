const initState = {
  error: null,
  user: {},
  isAuthenticated: false,
  isCompleted: false,
  isSubmit: false,
};
const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        ...action.payload,
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
        ...state,
        isCompleted: false,
        error: null
      };
    case 'SETUP_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
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

export default signUpReducer;
