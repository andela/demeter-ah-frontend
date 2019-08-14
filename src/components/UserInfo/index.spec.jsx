import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import UserInfo from './index';
import store from '../../store';

const user = {
  firstName: 'kevo',
  lastName: 'baba',
  username: 'frankobaba',
  email: 'kevo@me.com',
  image: 'somelink'
};

const setImage = () => ({});

describe('UserInfo Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <UserInfo store={store} setImage={setImage} user={user} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children component', () => {
    const component = mount(
      <Provider store={store}>
        <Router>
          <UserInfo store={store} setImage={setImage} user={user} />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('img')).toHaveLength(2);
    expect(component.find('input')).toHaveLength(1);
  });

  it('Should render along with children component wher image is null', () => {
    const component = mount(
      <Provider store={store}>
        <Router>
          <UserInfo store={store} setImage={setImage} user={{...user, image: null }} />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('img')).toHaveLength(2);
    expect(component.find('input')).toHaveLength(1);
  });
});
