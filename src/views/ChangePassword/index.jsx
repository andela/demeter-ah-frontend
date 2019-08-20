import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import callToast from '../../components/Toast';
import './index.scss';
import Status from '../../components/StatusView';
import * as actions from '../../store/actions/changePassword';
import Button from '../../components/Button';
import InputForm from '../../components/InputForm';

export const ChangePassword = ({
  authResponse, changePassword, location, history,
  cleanUpPasswordChange, isSubmitting,
}) => {
  useEffect(() => {
    cleanUpPasswordChange();
  }, []);

  useEffect(() => {
    if (authResponse.error && isSubmitting === false) callToast(authResponse.error, 'error');
  }, [authResponse]);

  const [values, setValues] = useState({ password: '', confirmPassword: '' });

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    const resetToken = urlParams.get('resetToken');
    const payload = {
      password: values.password,
      resetToken
    };
    (values.password !== values.confirmPassword)
      ? callToast('passwords must match', 'error')
      : changePassword(payload);
  };

  return (
    <main className="change-password">
      {
        !(authResponse.message && isSubmitting === false)
          ? (
            <form onSubmit={handleSubmit} autoComplete="off" className="lg:w-5/12 md:w-3/5 sm:w-4/5 w-full min-w-min sm:rounded-2xl rounded-none">
              <h3 className="text-center text-white text-3xl font-semibold">Change Password</h3>
              <InputForm
                classes="my-8 md:w-3/5 w-4/5 mx-auto"
                labelname="Password"
                name="password"
                placeholder="password"
                onChange={onChange}
                inputType="password"
              />
              <InputForm
                classes="my-8 md:w-3/5 w-4/5 mx-auto"
                labelname="Confirm Password"
                placeholder="confirm password"
                name="confirmPassword"
                onChange={onChange}
                inputType="password"
              />
              <Button
                type="submit"
                isSubmit={isSubmitting}
                className="submitBtn"
              >
                {isSubmitting ? 'Loading' : 'Submit'}
              </Button>
            </form>
          )
          : (
            <Status
              status={authResponse.message}
              width="w-2/4"
              height="h-86"
            >
              <Link to="/signin">
                Go to Sign In &nbsp; <b>&gt;</b>
              </Link>
            </Status>
          )
      }
    </main>
  );
};

function mapStateToProps(state) {
  return {
    authResponse: state.changePassword.response,
    isSubmitting: state.changePassword.isSubmitting,
  };
}

const matchDispatchToProps = {
  changePassword: actions.changePassword,
  cleanUpPasswordChange: actions.cleanUpPasswordChange,
};

export default connect(mapStateToProps, matchDispatchToProps)(ChangePassword);
