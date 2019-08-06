
import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './index';
// import InputForm from '../InputForm';

describe('Button Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });

  it('should display Loading... onSubmit prop function when form is submitted', () => {
    const state = true;
    const component = mount(<Button name="test" isSubmit={state} />);
    const res = component.find('button').at(0).text();
    expect(res).toEqual('Loading...');
  });
});
