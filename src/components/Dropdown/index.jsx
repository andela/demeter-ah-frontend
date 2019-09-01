import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';

const dropDown = ({ user, handleDropDown, handleSignOut }) => {
  const signOut = () => {
    handleSignOut();
  };

  const username = user && user.username;
  return (
    <div className="dropdown absolute max-w-85 min-w-48 flex flex-col">
      <div className="userinfo w-full py-2 bg-gray-30 text-center">
        <p className="username overflow-hidden p-2 text-gray-550 py-2">{`@${username}`}</p>
        <p className="fullname overflow-hidden p-2 text-gray-550 font-semibold whitespace-no-wrap">{`${user.firstName} ${user.lastName}`}</p>
      </div>
      <ul>
        <Link onClick={handleDropDown} to="/article/create">
          <li className="text-xs-2 border-b-2 border-gray-40 py-3 px-8 bg-white cursor-pointer text-center text-gray-550">
            Write a Story
          </li>
        </Link>
        <Link onClick={handleDropDown} to={`/profile/${username}/following`}>
          <li className="text-xs-2 border-b-2 border-gray-40 py-3 px-8 bg-white cursor-pointer text-center text-gray-550">
            Following
          </li>
        </Link>
        <Link onClick={handleDropDown} to={`/profile/${username}/articles`}>
          <li className="text-xs-2 border-b-2 border-gray-40 py-3 px-8 bg-white cursor-pointer text-center text-gray-550">
            Articles
          </li>
        </Link>
        <Link onClick={handleDropDown} to={`/profile/${username}/bookmark`}>
          <li className="text-xs-2 border-b-2 border-gray-40 py-3 px-8 bg-white cursor-pointer text-center text-gray-550">
            Bookmarks
          </li>
        </Link>
        <Link onClick={handleDropDown} to={`/profile/${username}/editprofile`}>
          <li className="text-xs-2 border-b-2 border-gray-40 py-3 px-8 bg-white cursor-pointer text-center text-gray-550">
            Profile
          </li>
        </Link>
        <Link onClick={handleDropDown} to={`/profile/${username}/stat`}>
          <li className="text-xs-2 border-b-2 border-gray-40 py-3 px-8 bg-white cursor-pointer text-center text-gray-550">
            Article Stats
          </li>
        </Link>
        <div onClick={signOut} role="button" onKeyPress={signOut} tabIndex={0}>
          <li className="text-xs-2 border-b-2 border-gray-40 py-3 px-8 bg-white cursor-pointer text-center text-gray-550">
            Sign out
          </li>
        </div>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(dropDown);
