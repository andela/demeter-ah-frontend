import React from 'react';
import { shallow, mount } from 'enzyme';
import InputForm from './index';

describe('InputForm Component', () => {
  it('Should render without errors in debug mode', () => {
    const component = shallow(<InputForm debug />);
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(<InputForm />);
    expect(component).toMatchSnapshot();
    expect(component.find('input')).toHaveLength(1);
    expect(component.find('label')).toHaveLength(1);
  });
});
