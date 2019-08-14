import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Menutab from './index';
import store from '../../store';

let history;
const user = {
  firstName: 'frank',
  lastName: 'angle',
  username: 'agnfr',
  email: 'frank@me.com',
  password: '12345678'
};
const match = { params: { username: 'kelvin' } };
describe('Menutab Component', () => {
  beforeEach(() => {
    history = createBrowserHistory();
  });

  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <Menutab store={store} history={history} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children component when username does not matches the current user', () => {
    const component = mount(
      <Provider store={store}>
        <Router>
          <Menutab user={user} match={match} history={history} />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('a')).toHaveLength(3);
  });

  it('Should render along with children component when username matches the current user', () => {
    const component = mount(
      <Provider store={store}>
        <Router>
          <Menutab user={{ ...user, username: 'kelvin' }} match={match} history={history} />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('a')).toHaveLength(6);
  });
});
