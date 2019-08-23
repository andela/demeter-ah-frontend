import React from 'react';
import { shallow } from 'enzyme';
import SearchArticleCard from './index';

describe('SearchArticleCard Component', () => {
  const tags = [
    {
      id: 3,
      name: 'react'
    }
  ];
  it('Should render without errors', () => {
    const component = shallow(<SearchArticleCard tags={tags} />);
    expect(component).toMatchSnapshot();
  });

  it('Should render without errors when no tags exist', () => {
    const component = shallow(<SearchArticleCard />);
    expect(component).toMatchSnapshot();
  });
});
