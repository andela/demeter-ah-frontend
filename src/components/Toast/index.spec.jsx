import React from 'react';
import { shallow } from 'enzyme';
import { Toast } from './index';

describe('Toast Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Toast output="welcome" />);
    expect(component).toMatchSnapshot();
  });
});
