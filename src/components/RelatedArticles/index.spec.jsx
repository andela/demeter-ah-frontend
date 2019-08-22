import React from 'react';
import { shallow } from 'enzyme';
import RelatedArticles from './index';

describe('RelatedArticles Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<RelatedArticles />);
    expect(component).toMatchSnapshot();
  });
});
