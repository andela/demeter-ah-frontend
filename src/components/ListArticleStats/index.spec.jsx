import React from 'react';
import { shallow } from 'enzyme';
import ListArticleStats from './index';

describe('ListArticleStats Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<ListArticleStats />);
    expect(component).toMatchSnapshot();
  });
});
