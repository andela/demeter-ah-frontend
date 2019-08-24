import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import uploadIcon from '../../assets/images/upload.png';
import { setProfileImage } from '../../store/actions/editProfile';
import FollowBtn from '../FollowButton';

const userInfo = ({ user, setImage, loggedInUser }) => {
  const [userData, setUser] = useState({
    ...user,
    image: user.image || 'https://i.imgur.com/wtjaVfi.png',
  });
  /* istanbul ignore next */
  const loadFilePath = async (file) => {
    const readPath = new FileReader();
    readPath.readAsDataURL(file);
    readPath.onload = e => setUser(prevState => ({ ...prevState, image: e.target.result }));
  };
    /* istanbul ignore next */
  const handleChange = (event) => {
    const [pictureFile] = event.target.files;
    setImage(pictureFile);
    loadFilePath(pictureFile);
  };

  const setUserInfo = () => {
    setUser(prevState => ({
      ...prevState,
      ...user,
      image: user.image || 'https://i.imgur.com/wtjaVfi.png',
    }));
  };

  useEffect(
    () => {
      setUserInfo();
    },
    [user]
  );

  return (
    <div className="userInfo w-full lg:w-10/12 mx-auto flex justify-center lg:justify-start items-center py-10">
      <div className="profileImg relative sm:min-w-32 sm:mr-4 sm:ml-2 md:mr-12">
        <img
          src={userData.image}
          alt=""
          className="prodilePic shadow-md h-32 w-32 md:h-40 md:w-40  lg:h-48 lg:w-48 object-cover rounded-full"
        />
        <div className={`upload absolute rounded-full ${loggedInUser.username !== user.username ? 'hide' : ''}`}>
          <label htmlFor="changePhoto">
            <img
              className=" m-0 h-9 w-9 rounded-full cursor-pointer border-4 border-solid border-white"
              src={uploadIcon}
              alt=""
            />
          </label>
          <input
            id="changePhoto"
            className="hidden"
            type="file"
            onChange={handleChange}
            accept="image/*"
            data-max-size="2000"
          />
        </div>
      </div>
      <div className="info text-left h-full px-2">
        <p className="username sm:max-w-56 md:max-w-xs my-2 font-semibold text-1.5xl md:text-3xl">
          {userData.username}
        </p>
        <p className="fullname mb-2 sm:max-w-56 md:max-w-xs text-sm md:text-1.5xl text-gray-550">{`${userData.firstName}  ${userData.lastName}`}</p>
        <div className="membership flex mb-2">
          <div className="mr-5 flex  sm:flex-row flex-col items-start items-center">
            <strong className="mr-1 text-sm text-left w-full md:text-base font-semibold">
              {userData.followingNo}
            </strong>
            <small className="text-gray-550 text-xs font-semibold">
              Following
            </small>
          </div>
          <div className="flex flex-col sm:flex-row items-start items-center">
            <strong className="mr-1 text-sm text-left w-full md:text-base font-semibold">
              {userData.followersNo}
            </strong>
            <small className="text-gray-550 font-semibold">Followers</small>
          </div>
        </div>
        <p className="bio text-xs sm:max-w-56 md:max-w-86 md:text-sm max-w-86 md:max-w-118 lg:max-w-122">
          {userData.bio === 'null' ? '' : userData.bio}
        </p>
        <FollowBtn viewedUser={user} classes="border border-solid rounded-xxs border-purple-250 w-32 ml-0 text-white text-sm mt-4" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isCompleted: state.editProfile.isCompleted,
  loggedInUser: state.auth.user,
});

export default connect(mapStateToProps, { setImage: setProfileImage })(
  userInfo
);
