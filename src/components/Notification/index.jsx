import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { pusher } from '../../utils';
import NotifIcon from '../../assets/svgs/notifIcon';
import { getNotificationsAction } from '../../store/actions/notifications';
import Dropdown from './dropDown';

const Notification = ({ user, getNotifications, notifyAlert }) => {
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownIcon = useRef();
  const [toggle, setToggle] = useState(false);
  let mounted = true;

  useEffect(() => {
    getNotifications();
    const channel = pusher.subscribe('notifications');

    channel.bind(`event-${user.id}`, () => {
      setNotify(true);
    });
    () => {
      mounted = false;
      channel.unbind();
    };
  }, []);

  const handleNotify = async () => {
    if (mounted && !toggle) {
      setToggle(true);
      setLoading(true);
      await getNotifications();
      setNotify(false);
      setLoading(false);
    }
  };

  const handleDropDown = (e) => {
    if (dropdownIcon.current && dropdownIcon.current.contains(e.target)) {
      setToggle(true);
      return;
    }
    setToggle(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleDropDown);
    return () => {
      document.removeEventListener('click', handleDropDown);
    };
  }, []);

  return (
    <div
      className="notification relative mx-2"
    >
      {toggle ? <Dropdown handleDropDown={handleDropDown} isLoading={loading} /> : ''}
      <button className="bell-icon relative m-0 p-0" onClick={handleNotify}>
        <div ref={dropdownIcon}><NotifIcon /></div>
        {(notify || notifyAlert)
          ? <div className="navAlert absolute h-3 w-3 top-0 right-0 border-solid border-2 border-white rounded-full bg-yellow-650" />
          : ''}
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  notifyAlert: state.notifications.notifyAlert,
});

const mapDispatchToProps = {
  getNotifications: getNotificationsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
