import React from 'react';
import { shallow } from 'enzyme';
import List from './list';

describe('List Component', () => {
  it('Should render without errors', () => {
    const articles = [];
    const component = shallow(<List articles={articles} />);
    expect(component).toMatchSnapshot();
  });
});
