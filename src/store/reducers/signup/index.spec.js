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
        error: null,
        user: {
          id: 1,
          name: 'frank',
        },
        isCompleted: true,
        isAuthenticated: true,
        isSubmit: false,
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
        error: null,
        user: {
          id: 1,
          name: 'frank',
        },
        isCompleted: true,
        isAuthenticated: true,
        isSubmit: false,
      }
    );
  });
});
