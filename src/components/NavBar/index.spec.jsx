import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBarComp } from './index';

describe('NavBar Component', () => {
  it('Should render without errors', () => {
    const history = {
      location: {
        pathname: '/signup'
      }
    };
    const component = shallow(<NavBarComp history={history} />);
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const history = {
      location: {
        pathname: '/article/create'
      }
    };
    const component = mount(
      <Router>
        <NavBarComp history={history} />
      </Router>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('img')).toHaveLength(2);
  });
});
