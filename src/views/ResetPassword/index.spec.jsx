import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import ReduxResetPassword, { ResetPassword } from './index';

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
      target: { value: 'frank@gmail.com', name: 'email' },
    };
    const component = mount(
      <ResetPassword
        authResponse={{ error: 'bad data' }}
        cleanUpReset={() => { }}
        isSubmitting={false}
        sendResetLink={() => { }}
      />
    );
    const inputTag = component.find('input').at(0);
    inputTag.simulate('change', event);
  });

  it('Should render status view after reset success', () => {
    const component = mount(
      <ResetPassword
        authResponse={{ message: 'welcome' }}
        cleanUpReset={() => { }}
        isSubmitting={false}
        sendResetLink={() => { }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should call handleSubmit function', () => {
    const mockOnResetFn = jest.fn();
    const fakeEvent = { preventDefault: () => { } };
    const component = shallow(
      <ResetPassword
        authResponse={{}}
        cleanUpReset={() => { }}
        isSubmitting={false}
        sendResetLink={mockOnResetFn}
      />
    );
    component.find('form').simulate('submit', fakeEvent);
    expect(mockOnResetFn.mock.calls.length).toBe(1);
  });

  it('should change button value from reset to loading on submit', () => {
    const component = mount(
      <ResetPassword
        authResponse={{ message: 'welcome' }}
        cleanUpReset={() => { }}
        isSubmitting
        sendResetLink={() => { }}
      />
    );
    expect(component.find('button').text()).toEqual('Loading...');
  });
});
