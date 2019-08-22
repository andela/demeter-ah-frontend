import React from 'react';
import { shallow } from 'enzyme';
import NoItem from './index';

describe('NoItem Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<NoItem />);
    expect(component).toMatchSnapshot();
  });
});
