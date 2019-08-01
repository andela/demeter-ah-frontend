import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from './index';
import store from '../../store';

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
    expect(component.find('button')).toHaveLength(3);
    expect(component.find('input')).toHaveLength(6);
    expect(component.find('img')).toHaveLength(2);
  });
});
