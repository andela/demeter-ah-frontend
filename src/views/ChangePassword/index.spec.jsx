import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import ReduxChangePassword, { ChangePassword } from './index';

describe('CHANGE PASSWORD COMPONENT', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <ReduxChangePassword store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(
      <Router>
        <ReduxChangePassword store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(2);
  });

  it('Should render status view after reset success', () => {
    const component = mount(
      <Router>
        <ChangePassword
          authResponse={{ message: 'welcome' }}
          cleanUpPasswordChange={() => { }}
          isSubmitting={false}
          changePassword={() => { }}
        />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('should call onChange function', () => {
    const event = {
      preventDefault() { },
      target: { value: 'frank@gmail.com', name: 'email' },
    };
    const component = mount(
      <ChangePassword
        authResponse={{ error: 'bad data' }}
        cleanUpPasswordChange={() => { }}
        isSubmitting={false}
        changePassword={() => { }}
      />
    );
    const inputTag = component.find('input').at(0);
    inputTag.simulate('change', event);
  });

  it('should call handleSubmit function', () => {
    const mockOnResetFn = jest.fn();
    const fakeEvent = { preventDefault: () => { } };
    const component = shallow(
      <ChangePassword
        authResponse={{}}
        cleanUpPasswordChange={() => { }}
        location={{
          search: '?resetToken=ed694ccc396754f158541e'
        }}
        isSubmitting={false}
        changePassword={mockOnResetFn}
      />
    );
    component.find('form').simulate('submit', fakeEvent);
    expect(mockOnResetFn.mock.calls.length).toBe(1);
  });

  it('should call toast function', () => {
    const fakeEvent = { preventDefault: () => { } };
    const component = mount(
      <ChangePassword
        authResponse={{}}
        cleanUpPasswordChange={() => { }}
        location={{
          search: '?resetToken=ed694ccc396754f158541e'
        }}
        isSubmitting={false}
        changePassword={() => { }}
      />
    );
    const input1 = component.find('input').at(0);
    const input2 = component.find('input').at(1);
    input1.simulate('change', { target: { name: 'password', value: 'Hello' } });
    input2.simulate('change', { target: { name: 'confirmPassword', value: 'Hello1' } });
    component.find('form').simulate('submit', fakeEvent);
  });

  it('should change button value from change to loading on submit', () => {
    const component = mount(
      <ChangePassword
        authResponse={{ message: 'welcome' }}
        cleanUpPasswordChange={() => { }}
        location={{
          search: '?resetToken=ed694ccc396754f158541e'
        }}
        isSubmitting
        changePassword={() => { }}
      />
    );
    expect(component.find('button').text()).toEqual('Loading...');
  });
});
