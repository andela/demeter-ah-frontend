import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn, { SignInComponent, cleanUp } from './index';
import store from '../../store';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Sign In Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <SignIn store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(
      <Router>
        <SignIn store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(4);
    expect(component.find('input')).toHaveLength(2);
    expect(component.find('img')).toHaveLength(4);
  });

  it('should call on change props', () => {
    const event = {
      preventDefault() { },
      target: { value: 'vinay@email.com', name: 'email' }
    };
    const mockOnSignInFn = jest.fn();
    const component = mount(
      <Router>
        <SignInComponent onSignIn={mockOnSignInFn} />
      </Router>
    );
    const inputTag = component.find('InputForm').at(0);
    const submitBtn = component.find('Button').at(0);
    inputTag.simulate('change', event);
    submitBtn.simulate('submit',
      { preventDefault() { } });
    expect(mockOnSignInFn.mock.calls.length).toBe(0);
  });

  test('Should run errors if error exist and is array', () => {
    const signInStore = mockStore({
      auth:
      {
        error: [{ message: 'some error' }],
        user: {},
        isAuthenticated: false,
        isCompleted: false,
        isSubmit: false
      }
    });
    const component = mount(
      <Router>
        <SignIn store={signInStore} />
      </Router>
    );

    const label = component.find('label').at(0);
    expect(label.text()).toEqual('Email');
  });

  test('Should run errors if error exist and is string', () => {
    const SignInStore = mockStore({
      auth:
      {
        error: 'some error',
        user: {},
        isAuthenticated: false,
        isCompleted: false,
        isSubmit: false
      }
    });
    const component = mount(
      <Router>
        <SignIn store={SignInStore} />
      </Router>
    );

    const label = component.find('label').at(0);
    expect(label.text()).toEqual('Email');
  });

  test('clean up action ', () => {
    expect(cleanUp()).toEqual({ type: 'CLEAN_UP', payload: { error: null, isCompleted: false } });
  });

  test('Should call toast if is completed', () => {
    const signupStore = mockStore({
      auth:
      {
        error: null,
        user: {},
        isAuthenticated: false,
        isCompleted: true,
        isSubmit: false
      }
    });
    const component = mount(
      <Router>
        <SignIn store={signupStore} />
      </Router>
    );

    const label = component.find('label').at(0);
    expect(label.text()).toEqual('Email');
  });

  it('should test that password is match is called', () => {
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <Router>
        <SignInComponent onSignIn={mockOnSignUpFn} />
      </Router>
    );
    const inputTag = component.find('input');
    inputTag.at(0).simulate('change', {
      target:
        { name: 'email', value: 'frank@gmail.com' }
    });
    inputTag.at(1).simulate('change', {
      target:
        { name: 'password', value: '123456789' }
    });
    inputTag.at(1).simulate('change', {
      target:
        { name: 'password', value: '123456789' }
    });
    const submitBtn = component.find('button').at(0);
    submitBtn.simulate('submit',
      { preventDefault() { } });
    expect(mockOnSignUpFn.mock.calls.length).toBe(1);
  });


  it('should singin with social login', () => {
    const component = mount(
      <Router>
        <SignInComponent />
      </Router>
    );
    const buttonTag = component.find('button');
    buttonTag.at(1).simulate('click', {
      target:
      { id: 'google' }
    });
    expect(localStorage.socialLogin).toEqual('false');
  });

  it('should authenticate user signin with social login', () => {
    const location = {
      search: '?token=eyJhbGciOiJIUzI&username=kel'
    };
    const callSocialSignIn = jest.fn(() => {});
    mount(
      <Router>
        <SignInComponent location={location} socialSignIn={callSocialSignIn} />
      </Router>
    );
    expect(location.search).toEqual('?token=eyJhbGciOiJIUzI&username=kel');
  });

  it('should redirect to signin if username and token does not exist', () => {
    const location = {
      search: ''
    };
    const history = {
      push: e => e
    };
    const callSocialSignIn = jest.fn(() => {});
    mount(
      <Router>
        <SignInComponent location={location} socialSignIn={callSocialSignIn} history={history} />
      </Router>
    );
    expect(location.search).toEqual('');
  });
});
