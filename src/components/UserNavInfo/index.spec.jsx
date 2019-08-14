import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import UserNavInfo from './index';
import store from '../../store';

const user = {
  firstName: 'frank',
  lastName: 'angle',
  username: 'agnfr',
  email: 'frank@me.com',
};
describe('UserNav Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <UserNavInfo store={store} user={user} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children component', () => {
    const component = mount(
      <Provider store={store}>
        <Router>
          <UserNavInfo />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('img')).toHaveLength(1);
  });
});
