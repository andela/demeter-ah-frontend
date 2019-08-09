const initState = {
  error: null,
  isLoading: false,
  user: {},
  isAuthenticated: false,
  isCompleted: false,
  isSubmit: false,
  isSettingAuth: true
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_PENDING':
      return {
        ...state,
        ...action.payload
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        ...action.payload
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
        ...action.payload
      };
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
        isSettingAuth: false,
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

export default authReducer;
