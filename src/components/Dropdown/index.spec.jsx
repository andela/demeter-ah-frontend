
import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './index';
import store from '../../store';

describe('DropDown Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Dropdown store={store} user={{ username: 'kevo' }} />);
    expect(component).toMatchSnapshot();
  });
});
