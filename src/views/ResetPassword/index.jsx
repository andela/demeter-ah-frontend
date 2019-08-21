import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import callToast from '../../components/Toast';
import Status from '../../components/StatusView';
import './index.scss';
import * as actions from '../../store/actions/resetPassword';
import Button from '../../components/Button';
import InputForm from '../../components/InputForm';

export const ResetPassword = ({
  authResponse, sendResetLink,
  cleanUpReset, isSubmitting,
}) => {
  const [email, setEmail] = useState({ email: '' });

  useEffect(() => {
    cleanUpReset();
  }, []);

  useEffect(() => {
    if (authResponse.error && isSubmitting === false) callToast(authResponse.error, 'error');
  }, [authResponse]);

  const onChange = (e) => {
    e.persist();
    setEmail(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendResetLink(email);
  };

  return (
    <main className="reset">
      {
        !(authResponse.message && isSubmitting === false)
          ? (
            <form onSubmit={handleSubmit} autoComplete="off" className="lg:w-5/12 md:w-3/5 sm:w-4/5 w-full min-w-min sm:rounded-2xl rounded-none">
              <h3 className="text-center text-white text-3xl font-semibold">Reset Password</h3>
              <InputForm
                classes="my-8 md:w-3/5 w-4/5 mx-auto"
                labelname="Email"
                name="email"
                placeholder="johndoe@gmail.com"
                onChange={onChange}
                inputType="email"
                pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
              />
              <Button
                type="submit"
                isSubmit={isSubmitting}
                className="submitBtn"
              >
                {isSubmitting ? 'Loading' : 'Reset'}
              </Button>
            </form>
          )
          : (
            <Status
              status={authResponse.message}
              width="w-2/4"
              height="h-86"
            />
          )
      }
    </main>
  );
};

function mapStateToProps(state) {
  return {
    authResponse: state.resetPassword.response,
    isSubmitting: state.resetPassword.isSubmitting,
  };
}

const matchDispatchToProps = {
  sendResetLink: actions.sendResetLink,
  cleanUpReset: actions.cleanUpReset,
};

export default connect(mapStateToProps, matchDispatchToProps)(ResetPassword);
