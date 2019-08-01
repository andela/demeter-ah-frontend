import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './index';

describe('NavBar Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<NavBar />);
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(
      <Router>
        <NavBar />
      </Router>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(2);
    expect(component.find('img')).toHaveLength(1);
  });
});
