import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Bookmarks from './index';
import store from '../../store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Sign In Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <Bookmarks store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(
      <Router>
        <Bookmarks store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  test('Should call toast isCompleted is true in signup use effect ', () => {
    const bookmarkArticleStore = mockStore({
      bookmarkArticle:
      {
        error: null,
        isLoading: false,
        isCompleted: true,
      },
      bookmarks:
      {
        error: null,
        isLoading: false,
        isCompleted: false,
        articles: [],
      }
    });
    const component = mount(
      <Router>
        <Bookmarks store={bookmarkArticleStore} />
      </Router>
    );

    expect(component).toMatchSnapshot();
  });

  test('Should run errors if error exist', () => {
    const bookmarkArticleStore = mockStore({
      bookmarkArticle:
      {
        error: null,
        isLoading: false,
        isCompleted: true,
      },
      bookmarks:
      {
        error: null,
        isLoading: false,
        isCompleted: false,
        articles: [],
      }
    });
    const component = mount(
      <Router>
        <Bookmarks store={bookmarkArticleStore} />
      </Router>
    );

    expect(component).toMatchSnapshot();
  });
});
