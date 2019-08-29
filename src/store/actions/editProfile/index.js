import * as types from '../actionTypes';
import { axiosCall, saveToLocalStorage } from '../../../utils';
import { setUpUser } from '../signup';
import { profileSuccess } from '../viewProfile';

export const editProfileCleanUp = () => ({
  type: types.EDIT_PROFILE_CLEAN_UP,
});

export const updateProfile = () => ({
  type: types.EDIT_PROFILE_SUBMIT,
});

export const editProfileSuccess = () => ({
  type: types.EDIT_PROFILE_SUCCESS,
  payload: {
    isLoading: false,
    isCompleted: true,
  },
});

export const editProfileError = error => ({
  type: types.EDIT_PROFILE_ERROR,
  payload: error,
});

export const saveLocalImage = pictureFile => ({
  type: types.SAVE_LOCAL_IMAGE,
  payload: { pictureFile },
});

export const editProfile = (
  { values, pictureFile },
  username,
  history
) => async (dispatch) => {
  dispatch(updateProfile());
  const profileForm = new FormData();
  Object.keys(values).map(async (key) => {
    profileForm.append(key, values[key]);
  });

  pictureFile && profileForm.append('image', pictureFile, pictureFile.name);

  try {
    const result = await axiosCall({
      path: '/api/v1/users',
      payload: profileForm,
      method: 'put',
      contentType: 'multipart/form-data',
    });
    dispatch(editProfileSuccess());
    saveToLocalStorage(result.user);
    dispatch(setUpUser({ user: result.user }));
    dispatch(profileSuccess(result.user));
    history.push(`/profile/${result.user.username}/editprofile`);
  } catch (err) {
    /* istanbul ignore next */
    const { response } = err;
    /* istanbul ignore next */
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(editProfileError(error));
  }
};

export const updateProfileInfo = user => async (dispatch) => {
  try {
    const result = await axiosCall({
      method: 'get',
      path: `/api/v1/profiles/${user.username}`,
    });
    saveToLocalStorage(result.user);
    dispatch(setUpUser({ user: result.user }));
  } catch (err) {
    const { response } = err;
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
  }
};

export const setProfileImage = pictureFile => async (dispatch) => {
  dispatch(saveLocalImage(pictureFile));
};
