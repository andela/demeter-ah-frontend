import React from 'react';
import { shallow } from 'enzyme';
import Rating from './index';

describe('Rating Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Rating />);
    expect(component).toMatchSnapshot();
  });
});
