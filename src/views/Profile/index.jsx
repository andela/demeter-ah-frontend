import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import { editProfile, editProfileCleanUp } from '../../store/actions/editProfile';
import callToast from '../../components/Toast';

const Profile = (props) => {
  const {
    user: {
      firstName, lastName, username, bio
    },
    isLoading,
    error,
    isCompleted,
    pictureFile,
    history,
    match,
  } = props;

  const [values, setValues] = useState({
    firstName,
    lastName,
    username,
    bio,
  });

  const onUpdate = (e) => {
    e.preventDefault();
    props.editProfile(
      {
        values,
        pictureFile
      },
      username,
      props.history
    );
  };

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  useEffect(
    () => {
      if (match.params.username !== username) {
        history.push('/');
      } else {
        if (error) {
          callToast(error, 'error');
        }

        if (isCompleted && !error) {
          callToast('Profile updated successfully', 'success');
        }
      }
      return () => {
        props.editProfileCleanUp();
      };
    },
    [isCompleted, error, match.params.username]
  );

  return (
    <div className="flex-grow border-t-2 border-solid border-gray-20 content bg-purple-50 mb-6">
      <form
        className=" flex flex-col min-w-96 max-w-180 w-3/4 m-auto text-left justify-center p-2"
        onSubmit={onUpdate}
      >
        <h4 className="m-4 ml-0 font-semibold w-full text-left text-gray-250">
          Edit Your Profile
        </h4>
        <div className="inputwrap md:my-4 flex flex-col md:flex-row justify-between w-full text-left">
          <InputForm
            classes="w-full md:w-5.5/12 my-2 md:my-0"
            labelname="First-name"
            name="firstName"
            labelClass="block mb-1 text-sm"
            inputType="text"
            onChange={onChange}
            inputClass="w-full px-2 py-3 text-sm border border-solid border-gray-350 text-gray-250"
            value={values.firstName}
          />
          <InputForm
            classes="w-full md:w-5.5/12 my-2 md:my-0"
            labelname="Last-name"
            name="lastName"
            labelClass="block mb-1 text-sm"
            inputType="text"
            onChange={onChange}
            inputClass="w-full px-2 py-3 text-sm border border-solid border-gray-350 text-gray-250"
            value={values.lastName}
          />
        </div>
        <InputForm
          classes="inputcon-full my-4"
          labelname="Username"
          name="username"
          labelClass="block mb-1 text-sm"
          inputType="text"
          onChange={onChange}
          inputClass="w-full px-2 py-3 text-sm order border-solid border-gray-350 text-gray-250"
          value={values.username}
        />
        <div className="my-4 w-full">
          <label name="bio" className="block mb-1 text-sm">
            Bio
          </label>
          <textarea
            className="w-full px-2 py-3 text-sm bg-gray-10 text-gray-250 border border-solid border-gray-350 h-40"
            name="bio"
            id="bio"
            onChange={onChange}
            value={values.bio || ''}
          />
        </div>
        <Button
          type="submit"
          name="Update"
          classes="cursor-pointer btn-purple w-32 ml-0 text-white  uploadBtn"
          isSubmit={isLoading}
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.editProfile.error,
  isLoading: state.editProfile.isLoading,
  isCompleted: state.editProfile.isCompleted,
  pictureFile: state.editProfile.pictureFile,
});

export default connect(mapStateToProps, { editProfile, editProfileCleanUp })(
  Profile
);
