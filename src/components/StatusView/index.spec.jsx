import React from 'react';
import { shallow } from 'enzyme';
import Status from './index';

describe('StatusView Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Status output="welcome" />);
    expect(component).toMatchSnapshot();
  });
});
