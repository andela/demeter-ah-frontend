import React from 'react';
import { shallow } from 'enzyme';
import Label from './index';

describe('Label Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Label debug />);
    expect(component).toMatchSnapshot();
  });
});
