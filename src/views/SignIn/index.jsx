import './index.scss';
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import callToast from '../../components/Toast';
import { decryptQuery } from '../../utils';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import {
  signInAction,
  cleanUpAuth,
  socialSignInAction,
} from '../../store/actions/SignIn';
import '../../styles/react-toastify.css';
import brandLogo from '../../assets/images/brand-logo.png';
import goggleIcon from '../../assets/images/google.png';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';

const SignIn = ({
  cleanUp,
  onSignIn,
  isCompleted,
  history,
  error,
  location,
  socialSignIn,
  isLoading,
}) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  useEffect(
    () => {
      if (isCompleted && !error) {
        callToast('Login successful', 'success');
        history && history.push('/');
      }
      if (error) {
        callToast('Invalid email or password', 'error');
      }
      if (localStorage.socialLogin === 'false' && location.search) {
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get('token');
        const username = urlParams.get('username');
        if (!username || !token) {
          /* istanbul ignore next */
          history && history.push('/signin');
        } else if (!isCompleted) {
          try {
            socialSignIn({ username, token: decryptQuery(token), history });
          } catch (err) {
            callToast('Invalid operation', 'error');
          }
        }
      }
      /* istanbul ignore next */
      return () => {
        /* istanbul ignore next */
        cleanUp();
      };
    },
    [isCompleted, error]
  );

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (values.email === '' || values.password === '') {
      callToast('No values provided', 'error');
      return;
    }
    onSignIn(values);
  };

  const handleSocial = (e) => {
    const { id } = e.target;
    localStorage.setItem('socialLogin', false);
    window.location = `${process.env.SERVER_URL}/auth/${id}`;
  };

  return (
    <Fragment>
      <div className="signin">
        <div className="bg card-wrapper flex justify-center items-center">
          <div className="card p-10 my-10 max-w-118 min-w-96 flex-col-reverse md:flex-row sm:p-4 lg:px-10 max-w-108 sm:max-w-108 md:px-4 md:py-10 md:max-w-220">
            <form
              onSubmit={submit}
              className="left-con flex flex-col flex-grow sm:px-2 md:px-5 min-w-84 sm:w-full md:w-6/12"
            >
              <h1 className="w-full pt-4 px-12 lg:px-16 left-0 sm:top-0  md:top-1.5 text-center md:text-left absolute m-0 p-0 text-2xl text-purple-650 font-semibold">
                Sign in
              </h1>
              <div className="mb-6 md:mb-0 mt-6 pr-0 flex-grow flex flex-col justify-center w-full">
                <InputForm
                  classes="inputcon-full mb-8"
                  labelname="Email"
                  name="email"
                  labelClass="block mb-1 text-sm pl-1"
                  inputType="text"
                  onChange={onChange}
                  id="email"
                  inputClass="input text-sm py-1"
                  placeholder="johndoe@example.com"
                  pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
                  title="johndoe@example.com"
                />
                <InputForm
                  classes="inputcon-full"
                  labelname="Password"
                  name="password"
                  labelClass="block mb-1 text-sm pl-1"
                  inputType="password"
                  onChange={onChange}
                  inputClass="input text-sm"
                  placeholder="Password"
                  id="password"
                  pattern="^[\w@.]{7,20}$"
                  title="Password is invalid"
                  autoComplete="off"
                />
              </div>
              <Link to="/reset-password" className="flex items-center text-purple-650 text-sm mx-2 mb-6 cursor-pointer">
                Forgot password ?
              </Link>
              <div className="w-full flex flex-col-reverse items-center mb-4 md:mb-0 md:mt-4 md:flex-row md:justify-between">
                <p className="flex items-center mx-2 my-0 text-sm">
                  {'Not a Member?'}
                  <Link
                    to="/signup"
                    className="text-purple-650 ml-2 font-semibold cursor-pointer"
                  >
                    {'Sign up'}
                  </Link>
                </p>
                <Button
                  type="submit"
                  name="Login"
                  isSubmit={isLoading}
                  classes="btn-purple w-6/12 md:mb-0 mb-4 md:w-1/3 mx-2"
                />
              </div>
            </form>
            <div className=" flex md:flex flex-grow flex-col items-center relative">
              <hr className="vline sm:hidden md:block" />
              <span className="sm:font-semibold md:font-normal">OR</span>
              <hr className="vline sm:hidden md:block" />
            </div>
            <div className="right-con mt-10 mb-4 md:my-0 flex justify-center min-w-84 sm:w-full md:w-5/12">
              <img
                src={brandLogo}
                className="mb-4 hidden md:block sm:hidden lg:block"
                alt="Authors Haven"
              />
              <Button
                onClick={handleSocial}
                id="google"
                type="button"
                name="Login"
                classes="w-64 flex items-center justify-around shadow-md rounded-lg mx-2 my-3 text-sm"
              >
                <img src={goggleIcon} alt="Authors Haven" />
                Sign in with Google
              </Button>
              <Button
                onClick={handleSocial}
                id="facebook"
                type="button"
                name="Login"
                classes="w-64 flex items-center justify-around shadow-md rounded-lg mx-2 my-3 text-sm"
              >
                <img
                  src={facebookIcon}
                  alt="Authors Haven"
                />
                Sign in with Facebook
              </Button>
              <Button
                onClick={handleSocial}
                id="twitter"
                type="button"
                name="Login"
                classes="w-64 flex items-center justify-around shadow-md rounded-lg mx-2 my-3 text-sm"
              >
                <img
                  src={twitterIcon}
                  alt="Authors Haven"
                />
                Sign in with Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  error: state.auth.error,
  isLoading: state.auth.isLoading,
  user: state.auth.user,
  isCompleted: state.auth.isCompleted,
  isAuthenticated: state.auth.isAuthenticated,
});

/* istanbul ignore next */
export const onSignIn = newUser => signInAction(newUser);
export const cleanUp = () => cleanUpAuth();
/* istanbul ignore next */
export const socialSignIn = userObj => socialSignInAction(userObj);

export const SignInComponent = SignIn;

export default connect(mapStateToProps, { onSignIn, cleanUp, socialSignIn })(
  SignIn
);
