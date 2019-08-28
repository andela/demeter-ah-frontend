import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';


export const notificationSuccess = ({ notifications, notifyAlert }) => ({
  type: types.NOTIFICATIONS_SUCCESS,
  payload: {
    notifications,
    notifyAlert,
  }
});

export const notificationStatus = statusObj => ({
  type: types.NOTIFICATIONS_STATUS,
  payload: {
    notificationStatus: statusObj,
  }
});

export const notificationFailure = error => ({
  type: types.NOTIFICATIONS_FAILURE,
  payload: {
    error,
  }
});

export const setNotifStatus = type => async (dispatch) => {
  const route = type === 'inApp' ? 'app-notify' : 'email-notify';
  try {
    const result = await axiosCall({
      path: `/api/v1/notifications/${route}`, method: 'patch',
    });
    dispatch(notificationStatus(result.notificationStatus));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const error = (response && response.data && response.data.message);
    /* istanbul ignore next */
    dispatch(notificationFailure(error));
  }
};

export const getNotifStatus = () => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: '/api/v1/notifications/status', method: 'get',
    });
    dispatch(notificationStatus(result.notificationStatus));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const error = (response && response.data && response.data.message);
    /* istanbul ignore next */
    dispatch(notificationFailure(error));
  }
};

export const getNotificationsAction = () => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: '/api/v1/notifications', method: 'get',
    });
    const { notifications } = result;
    const notifyAlert = notifications.some(notif => !notif.seen);
    // console.log(notifyAlert, notifications, 'notif status');
    dispatch(notificationSuccess({ notifications, notifyAlert }));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const error = (response && response.data && response.data.message);
    /* istanbul ignore next */
    dispatch(notificationFailure(error));
  }
};

export const readNotificationAction = notifId => async (dispatch) => {
  try {
    await axiosCall({
      path: `/api/v1/notifications/${notifId}`, method: 'patch',
    });
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const error = (response && response.data && response.data.message);
    /* istanbul ignore next */
    dispatch(notificationFailure(error));
  }
};
