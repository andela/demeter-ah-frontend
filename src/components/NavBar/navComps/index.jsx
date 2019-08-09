import React from 'react';
import Button from '../../Button';
import User from '../../../assets/images/user.png';

const Thumbnail = () => (
  <div className="w-10">
    <img
      id="logo"
      className="w-full"
      src={User}
      alt="Author's Haven"
    />
  </div>
);

export const AuthNav = ({ history }) => (
  <>
    <Button type="button" onClick={() => history.push('/signup')} name="Sign Up" classes="btn-purple w-32 hidden md:inline" />
    <Button
      onClick={() => history.push('/signin')}
      type="button"
      name="Sign In"
      classes="cursor-pointer btn-white w-32 ml-2 text-purple-650 border hidden md:inline border-solid border-purple-650"
    />
  </>
);

export const CreateArticleNav = ({ openModal }) => (
  <>
    <Button type="button" onClick={() => openModal()} name="Ready To Publish?" classes="btn-purple w-40 hidden md:inline" />
    <Thumbnail />
  </>
);
