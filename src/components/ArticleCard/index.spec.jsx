import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleCard from './index';
import store from '../../store';

describe('Sign In Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <ArticleCard store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(
      <Router>
        <ArticleCard store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
