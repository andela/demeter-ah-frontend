import React, { Fragment } from 'react';
import Menu from './menu';
import ArticleIcon from '../../assets/svgs/articleIcon';
import BookmarkIcon from '../../assets/svgs/bookmarkIcon';
import SettingsIcon from '../../assets/svgs/settingsIcon';
import StatIcon from '../../assets/svgs/statIcon';
import './index.scss';

const menuTab = ({ user, match }) => {
  const username = user && user.username;
  const params = match.params.username;
  return (
    <div className="menuTab min-w-96 w-10/12 px-2 md:w-11/12 md:px-0  lg:w-10/12 lg:justify-around  my-0 mx-auto flex justify-center">
      <Menu id="articles" name="menuTabs" to={`/profile/${params}/articles`}>
        <div className="menuIcon">
          <ArticleIcon />
        </div>
        <span className="hidden md:block">Articles</span>
      </Menu>
      <Menu id="following" name="menuTabs" to={`/profile/${params}/following`}>
        <div className="menuIcon">
          <img src="/following.png" className="h-5 w-5" alt="following" />
        </div>
        <span className="hidden md:block">Following</span>
      </Menu>
      <Menu id="followers" name="menuTabs" to={`/profile/${params}/followers`}>
        <div className="menuIcon">
          <img src="/followers.png" className="h-5 w-5" alt="followers" />
        </div>
        <span className="hidden md:block">Followers</span>
      </Menu>
      {username === params ? (
        <Fragment>
          <Menu id="bookmark" name="menuTabs" to={`/profile/${username}/bookmark`}>
            <div className="menuIcon">
              <BookmarkIcon />
            </div>
            <span className="hidden md:block">Bookmarks</span>
          </Menu>
          <Menu id="stat" name="menuTabs" to={`/profile/${username}/stat`}>
            <div className="menuIcon">
              <StatIcon />
            </div>
            <span className="hidden md:block">Article Stats</span>
          </Menu>
          <Menu id="settings" name="menuTabs" to={`/profile/${username}/editprofile`}>
            <div className="menuIcon">
              <SettingsIcon />
            </div>
            <span className="hidden md:block">Edit Profile</span>
          </Menu>
        </Fragment>
      ) : ''}
    </div>
  );
};

export default menuTab;
