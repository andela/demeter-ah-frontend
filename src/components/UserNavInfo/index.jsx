import React from 'react';
import { connect } from 'react-redux';
import NotifIcon from '../../assets/svgs/notifIcon';
import Dropdown from '../../assets/svgs/dropdown';
import './index.scss';

const userNav = ({ onClick, user, refname }) => (
  <div className="userNav flex items-center">
    <div className="relative mx-2 cursor-pointer">
      <div className="navAlert absolute h-3 w-3 top-0 right-0 border-solid border-2 border-white rounded-full bg-yellow-650" />
      <NotifIcon />
    </div>
    <div className="flex items-center cursor-pointer" ref={refname}>
      <img
        className="h-10 w-10 mx-2 rounded-full object-cover"
        src={user.image
      || 'https://i.imgur.com/wtjaVfi.png'}
        alt=""
      />
      <Dropdown onClick={onClick} classes="mx-2 cursor-pointer" />
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(userNav);
