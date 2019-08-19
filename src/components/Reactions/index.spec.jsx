import React from 'react';
import { shallow } from 'enzyme';
import Reactions from './index';

describe('Reactions Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Reactions />);
    expect(component).toMatchSnapshot();
  });
});
