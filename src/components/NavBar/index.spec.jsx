import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './index';
import store from '../../store';

let history;
describe('NavBar Component', () => {
  beforeEach(() => {
    history = createBrowserHistory();
  });

  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <NavBar store={store} history={history} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children component', () => {
    const component = mount(
      <Provider store={store}>
        <Router>
          <NavBar history={history} />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(3);
    expect(component.find('img')).toHaveLength(1);
  });
});
