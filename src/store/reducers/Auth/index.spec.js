import signUpReducer from './index';

let initialState;

describe('Sign Up Reducer', () => {
  beforeEach(() => {
    initialState = {
      error: null,
      user: {},
      isAuthenticated: false,
      isCompleted: false,
      isSubmit: false,
      isLoading: false,
      isSettingAuth: true
    };
  });

  it('should return the initial state', () => {
    expect(signUpReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SIGNUP_SUCCESS', () => {
    expect(signUpReducer(initialState, {
      type: 'SIGNUP_SUCCESS',
      payload: {
        user: {
          id: 1,
          name: 'frank',
        },
        isCompleted: true,
        isAuthenticated: true
      }
    })).toEqual(
      {
        ...initialState,
        user: {
          id: 1,
          name: 'frank',
        },
        isCompleted: true,
        isAuthenticated: true,
      }
    );
  });

  it('should handle SIGNUP_ERROR', () => {
    expect(signUpReducer(initialState, {
      type: 'SIGNUP_ERROR',
      payload: 'an error occured',

    })).toEqual(
      {
        ...initialState,
        error: 'an error occured',
      }
    );
  });

  it('should handle CLEAN_UP', () => {
    expect(signUpReducer(initialState, {
      type: 'CLEAN_UP',
    })).toEqual(
      {
        ...initialState
      }
    );
  });

  it('should handle SETUP_USER', () => {
    expect(signUpReducer(initialState, {
      type: 'SETUP_USER',
      payload: {
        id: 1,
        name: 'frank',
      },
    })).toEqual(
      {
        ...initialState,
        isAuthenticated: true,
        isSettingAuth: false,
        user: {
          id: 1,
          name: 'frank',
        },
      }
    );
  });

  it('should handle SIGNUP', () => {
    expect(signUpReducer(initialState, {
      type: 'SIGNUP',
      payload: {
        user: {
          id: 1,
          name: 'frank',
        },
        isCompleted: true,
        isAuthenticated: true
      }
    })).toEqual(
      {
        ...initialState,
        user: {
          id: 1,
          name: 'frank',
        },
        isCompleted: true,
        isAuthenticated: true
      }
    );
  });


  it('should handle SIGNIN_PENDING', () => {
    expect(signUpReducer(initialState, {
      type: 'SIGNIN_PENDING',
      payload: {
        isCompleted: false,
        isLoading: true,
        error: null
      }
    })).toEqual(
      {
        ...initialState,
        isCompleted: false,
        isLoading: true,
        error: null
      }
    );
  });


  it('should handle SIGNIN_SUCCESS', () => {
    expect(signUpReducer(initialState, {
      type: 'SIGNIN_SUCCESS',
      payload: {
        isLoading: false,
        user: { name: 'frank' },
        isCompleted: true,
        isAuthenticated: true,
      }
    })).toEqual(
      {
        ...initialState,
        isLoading: false,
        user: { name: 'frank' },
        isCompleted: true,
        isAuthenticated: true,
      }
    );
  });


  it('should handle SIGNIN_ERROR', () => {
    expect(signUpReducer(initialState, {
      type: 'SIGNIN_ERROR',
      payload: {
        error: 'some error',
        isCompleted: true,
        isLoading: false,
      }
    })).toEqual(
      {
        ...initialState,
        error: 'some error',
        isCompleted: true,
        isLoading: false,
      }
    );
  });
});
