import React from 'react';
import { connect } from 'react-redux';
import Dropdown from '../../assets/svgs/dropdown';
import Notification from '../Notification';
import './index.scss';

const UserNav = ({ onClick, user, refname }) => (
  <div className="userNav flex items-center">
    <div className="relative mx-2 cursor-pointer">
      <Notification />
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

export default connect(mapStateToProps)(UserNav);
