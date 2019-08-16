import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { membership } from '../../reducers/initialState';
import * as actions from './index';
import { axiosCall } from '../../../utils';

class CustomError extends Error {
  constructor(message, option = 'string') {
    super(message);
    this.response = option === 'object'
      ? { data: { message: this.message } }
      : { data: { message: false } };
  }
}

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const user = {
  username: 'frank@me.com'
};
jest.mock('../../../utils');

describe('MEMBERSHIP ACTIONS', () => {
  describe('actions', () => {
    test('membership pending should return type MEMBERS_PENDING', () => {
      const membersPendingActions = actions.membersPending();

      expect(membersPendingActions).toEqual({ type: 'MEMBERS_PENDING', payload: { isLoading: true, isSuccess: false } });
    });

    test('followingSuccess should return type FOLLOWING_SUCCESS', () => {
      const following = 'successful';
      const followingSuccessActions = actions.followingSuccess(following);

      expect(followingSuccessActions).toEqual({
        type: 'FOLLOWING_SUCCESS',
        payload: {
          following,
          isLoading: false
        }
      });
    });

    test('followerSuccess should return type FOLLOWING_SUCCESS', () => {
      const followers = 'successful';
      const followerSuccessActions = actions.followerSuccess(followers);

      expect(followerSuccessActions).toEqual({
        type: 'FOLLOWERS_SUCCESS',
        payload: {
          followers,
          isLoading: false
        }
      });
    });

    test('membersError should return type MEMBERS_ERROR', () => {
      const error = 'fail';
      const membersErrorActions = actions.membersError(error);

      expect(membersErrorActions).toEqual({
        type: 'MEMBERS_ERROR',
        payload: {
          error,
          isLoading: false
        }
      });
    });
  });

  describe('thunk', () => {
    let store;
    beforeEach(() => {
      store = mockStore(membership);
    });

    afterEach(() => {
      store.clearActions();
    });

    test('should send FOLLOWERS_SUCCESS action if username is used to getFollowers', (done) => {
      const expectedActions = ['MEMBERS_PENDING', 'FOLLOWERS_SUCCESS'];
      axiosCall.mockResolvedValue({
        user: { followers: [{ name: 'say' }] }
      });
      store.dispatch(actions.getFollowersAction('user')).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should send FOLLOWERS_SUCCESS action if no username is used to getFollowers', (done) => {
      const expectedActions = ['MEMBERS_PENDING', 'FOLLOWERS_SUCCESS'];
      axiosCall.mockResolvedValue({
        user: { followers: [{ name: 'say' }] }
      });
      store.dispatch(actions.getFollowersAction()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should send MEMBERS_ERROR action if no error occurs in getFollowers', (done) => {
      const expectedActions = ['MEMBERS_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('User not found', 'object'));
      store.dispatch(actions.getFollowersAction()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should send FOLLOWING_SUCCESS action if username is used to getFollowing', (done) => {
      const expectedActions = ['MEMBERS_PENDING', 'FOLLOWING_SUCCESS'];
      axiosCall.mockResolvedValue({
        user: { following: [{ name: 'say' }] }
      });
      store.dispatch(actions.getFollowingAction('user')).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should send FOLLOWING_SUCCESS action if no username is used to getFollowing', (done) => {
      const expectedActions = ['MEMBERS_PENDING', 'FOLLOWING_SUCCESS'];
      axiosCall.mockResolvedValue({
        user: { following: [{ name: 'say' }] }
      });
      store.dispatch(actions.getFollowingAction()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should send MEMBERS_ERROR action if no error occurs in getFollowing', (done) => {
      const expectedActions = ['MEMBERS_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('User not found', 'object'));
      store.dispatch(actions.getFollowingAction()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should send follower user action', (done) => {
      const expectedActions = ['VIEW_PROFILE_PENDING', 'VIEW_PROFILE_SUCCESS'];
      axiosCall.mockResolvedValue({
        user: { following: [{ name: 'say' }] }
      });
      store.dispatch(actions.followUser({ viewedUser: user, user })).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should not send follower user action', (done) => {
      const expectedActions = [];
      axiosCall.mockResolvedValue({
        user: { following: [{ name: 'say' }] }
      });
      store.dispatch(actions.followUser({ viewedUser: { email: 'email' }, user })).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should send MEMBERS_ERROR action if no error occurs in followUser', (done) => {
      const expectedActions = ['MEMBERS_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('User not found', 'object'));
      store.dispatch(actions.followUser({ viewedUser: user, user })).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
