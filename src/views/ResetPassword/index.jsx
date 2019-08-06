import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import callToast from '../../components/Toast';
import './index.scss';
import * as actions from '../../store/actions/resetPassword';
import Button from '../../components/Button';
import InputForm from '../../components/InputForm';

const ResetPassword = ({
  authResponse, sendResetLink,
  cleanUpReset, isSubmitting,
}) => {
  useEffect(() => {
    cleanUpReset();
  }, [authResponse]);

  const [email, setEmail] = useState({ email: '' });

  if (authResponse.message && isSubmitting === false) callToast(authResponse.message, 'success');
  else if (authResponse.error && isSubmitting === false) callToast(authResponse.error, 'error');

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
      <form onSubmit={handleSubmit} autoComplete="off" className="lg:w-5/12 sm:w-3/5 w-full min-w-min sm:rounded-2xl rounded-none">
        <h3 className="text-center text-white text-3xl font-semibold">Reset Password</h3>
        <InputForm
          classes="my-8 w-3/5 mx-auto"
          labelname="Email"
          name="email"
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
export const ResetPasswordComp = ResetPassword;
export default connect(mapStateToProps, matchDispatchToProps)(ResetPassword);
