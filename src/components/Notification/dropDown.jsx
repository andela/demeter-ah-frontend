import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NotifList from './list';
import './index.scss';
import {
  readNotificationAction,
  getNotificationsAction,
} from '../../store/actions/notifications';

const DropDown = ({
  notifications, readNotif, getNotif, isLoading, handleDropDown,
}) => {
  const [notificationList, setnotificationList] = useState('');

  const handleNotifRead = async (id) => {
    await readNotif(id);
    await getNotif();
  };


  useEffect(
    () => {
      notifications
        && setnotificationList(
          notifications.map(notification => (
            <NotifList
              key={notification.id}
              handleNotifRead={handleNotifRead}
              handleDropDown={handleDropDown}
              notifObj={notification}
            />
          ))
        );
    },
    [notifications]
  );

  return (
    <div

      className="notif-dropdown absolute w-86 max-h-85.5 min-w-48 flex flex-col z-100"
    >
      <p className="header bg-white py-2 pl-8 border border-solid border-gray-300 font-bold text-sm">
        Notifications
      </p>
      <div className="overflow-y-scroll">
        {notificationList}
      </div>
      { !isLoading ? '' : (
        <div className="flex justify-center bg-gray-5">
          <img src="/loader.gif" alt="loader" className="h-6 w-6" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  notifications: state.notifications.notifications,
});

const mapDispatchToProps = {
  readNotif: readNotificationAction,
  getNotif: getNotificationsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
