import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { signUpAction } from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let user;

describe('Auth Action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    user = {
      firstName: 'frank',
      lastName: 'angle',
      username: 'agnfr',
      email: 'frank@me.com',
      password: '12345678'
    };
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('sign up user actions', (done) => {
    nock('http://localhost:5000')
      .post('/api/v1/users/signup')
      .reply(201, {
        message: 'sign up successful',
        user: {
          firstName: 'frank',
          lastName: 'angle',
          username: 'agnfr',
          email: 'frank@me.com',
          password: '12345678',
          token: 'sdfjdfgdvfdvfdhfbhdbfdhbdbfhbdfdbfdff'
        }
      });
    store.dispatch(signUpAction(user)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
});
