import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import ReduxResetPassword, { ResetPasswordComp } from './index';

describe('RESET PASSWORD COMPONENT', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <ReduxResetPassword store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(
      <Router>
        <ReduxResetPassword store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(1);
  });

  it('should call onChange function', () => {
    const event = {
      preventDefault() { },
      target: { value: 'frank@gmail.com', name: 'email' }
    };
    const mockOnResetFn = jest.fn();
    const component = mount(
      <ResetPasswordComp authResponse={{ error: 'bad data' }} cleanUpReset={() => { }} isSubmitting={false} sendResetLink={() => { }} onSignUp={mockOnResetFn} />
    );
    const inputTag = component.find('input').at(0);
    inputTag.simulate('change', event);
  });

  it('should call handleSubmit function', () => {
    const mockOnResetFn = jest.fn();
    const fakeEvent = { preventDefault: mockOnResetFn };
    const component = shallow(
      <ResetPasswordComp authResponse={{ message: 'welcome' }} cleanUpReset={() => { }} isSubmitting={false} sendResetLink={() => { }} onSignUp={mockOnResetFn} />
    );
    component.find('form').simulate('submit', fakeEvent);
    expect(mockOnResetFn.mock.calls.length).toBe(1);
  });

  it('should change button value from reset to loading on submit', () => {
    const component = mount(
      <ResetPasswordComp authResponse={{ message: 'welcome' }} cleanUpReset={() => { }} isSubmitting sendResetLink={() => { }} />
    );
    expect(component.find('button').text()).toEqual('Loading');
  });
});
