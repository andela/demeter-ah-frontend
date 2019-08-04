import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup, { SingUpComponent, cleanup } from './index';
import store from '../../store';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('NavBar Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <Signup store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(
      <Router>
        <Signup store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(6);
    expect(component.find('img')).toHaveLength(1);
  });

  it('should call on change props', () => {
    const event = {
      preventDefault() { },
      target: { value: 'frank', name: 'email' }
    };
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <SingUpComponent onSignUp={mockOnSignUpFn} />
    );
    const inputTag = component.find('input').at(0);
    const submitBtn = component.find('button').at(0);
    inputTag.simulate('change', event);
    submitBtn.simulate('submit',
      { preventDefault() { } });
    expect(mockOnSignUpFn.mock.calls.length).toBe(1);
  });

  test('Should call toast isCompleted is true in signup use effect ', () => {
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
    const component = mount(<Signup store={signupStore} />);

    const label = component.find('label').at(0);
    expect(label.text()).toEqual('Email');
  });

  test('Should run errors if error exist and is array', () => {
    const signupStore = mockStore({
      auth:
      {
        error: [{ message: 'some error' }],
        user: {},
        isAuthenticated: false,
        isCompleted: false,
        isSubmit: false
      }
    });
    const component = mount(<Signup store={signupStore} />);

    const label = component.find('label').at(0);
    expect(label.text()).toEqual('Email');
  });

  test('Should run errors if error exist and is string', () => {
    const signupStore = mockStore({
      auth:
      {
        error: 'some error',
        user: {},
        isAuthenticated: false,
        isCompleted: false,
        isSubmit: false
      }
    });
    const component = mount(<Signup store={signupStore} />);

    const label = component.find('label').at(0);
    expect(label.text()).toEqual('Email');
  });

  test('clean up action ', () => {
    expect(cleanup()).toEqual({ type: 'CLEAN_UP' });
  });


  it('should test that password is match is called', () => {
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <SingUpComponent onSignUp={mockOnSignUpFn} />
    );
    const inputTag = component.find('input');
    inputTag.at(0).simulate('change', {
      target:
        { name: 'email', value: 'frank@gmail.com' }
    });
    inputTag.at(1).simulate('change', {
      target:
        { name: 'firstName', value: 'frank' }
    });
    inputTag.at(2).simulate('change', {
      target:
        { name: 'lastName', value: 'angee' }
    });
    inputTag.at(3).simulate('change', {
      target:
        { name: 'username', value: 'frankiii' }
    });
    inputTag.at(4).simulate('change', {
      target:
        { name: 'password', value: '12345678' }
    });
    inputTag.at(5).simulate('change', {
      target:
        { name: 'confirmPassword', value: 'adfaedefe' }
    });
    const submitBtn = component.find('button').at(0);
    submitBtn.simulate('submit',
      { preventDefault() { } });
    expect(mockOnSignUpFn.mock.calls.length).toBe(0);
  });
});
