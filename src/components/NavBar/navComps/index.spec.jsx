import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthNav, CreateArticleNav } from './index';

describe('NavBar header Component', () => {
  it('Should render without errors', () => {
    const history = {
      location: {
        pathname: '/signup'
      }
    };
    const component = shallow(<AuthNav history={history} />);
    expect(component).toMatchSnapshot();
  });

  it('should click btn', () => {
    const history = {
      push: e => e,
    };
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <Router>
        <AuthNav history={history} />
      </Router>
    );
    const submitBtn = component.find('button').at(0);
    const submitBtn2 = component.find('button').at(1);
    submitBtn.simulate('click',
      { preventDefault() { } });
    submitBtn2.simulate('click',
      { preventDefault() { } });
    expect(mockOnSignUpFn.mock.calls.length).toBe(0);
  });

  it('should click btn', () => {
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <Router>
        <CreateArticleNav openModal={mockOnSignUpFn} />
      </Router>
    );
    const submitBtn = component.find('button').at(0);
    submitBtn.simulate('click',
      { preventDefault() { } });
    expect(mockOnSignUpFn.mock.calls.length).toBe(1);
  });
});
