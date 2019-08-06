import './index.scss';
import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import callToast from '../../components/Toast';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import { signUpAction, cleanUpAuth } from '../../store/actions/signup';
import brandLogo from '../../assets/images/brand-logo.png';

const Signup = (props) => {
  const {
    isCompleted, history, isSubmit, error
  } = props;
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      callToast('password must match', 'error');
      return;
    }
    props.onSignUp(values);
  };

  useEffect(() => {
    if (isCompleted) {
      callToast('Registration successful', 'success');
      /* istanbul ignore next */
      history && history.push('/');
    }
    if (error) {
      if (Array.isArray(error)) {
        for (let i = 0; i < error.length; i += 1) {
          callToast(error[i].message, 'error');
        }
      } else {
        callToast(error, 'error');
      }
    }
    /* istanbul ignore next */
    return () => {
      /* istanbul ignore next */
      props.cleanup();
    };
  }, [isCompleted, error]);

  return (
    <Fragment>
      <div className="signup w-100 md:w-auto">
        <div
          className="bg card-wrapper flex justify-center md:items-center"
        >
          <div className="card md:p-10">
            <h1 className="w-full mb-4 px-5 text-center md:text-left text-xl md:text-2xl text-purple-650 font-semibold">Sign up</h1>
            <div className="flex flex-col md:flex-row">
              <form onSubmit={submit} className="left-con md:w-112 order-3 md:order-1">
                <div className="md:pr-8 flex flex-col justify-center w-full mt-4">
                  <InputForm
                    classes="inputcon-full mb-4 pl-0"
                    labelname="Email"
                    name="email"
                    labelClass="block mb-1 text-sm"
                    inputType="text"
                    id="email"
                    inputClass="input text-sm"
                    placeholder="johndoe@examle.com"
                    onChange={onChange}
                    pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
                    title="must be a valid email"
                  />
                  <div className="block md:flex justify-center align-center">
                    <InputForm
                      classes="block inputcon-full mb-4 mr-2"
                      labelname="First Name"
                      name="firstName"
                      labelClass="block mb-1 text-sm"
                      inputType="text"
                      inputClass="input text-sm"
                      placeholder="First Name"
                      onChange={onChange}
                      id="firstName"
                      pattern="^[\w]{3,20}$"
                      title="first name is required and must be more than 3 character"
                    />

                    <InputForm
                      classes="block inputcon-full mb-4 md:ml-2"
                      labelname="Last Name"
                      name="lastName"
                      labelClass="block mb-1 text-sm"
                      inputType="text"
                      inputClass="input text-sm"
                      placeholder="Last Name"
                      id="lastName"
                      onChange={onChange}
                      pattern="^[\w]{3,20}$"
                      title="last name is required and must be more than 3 character"
                    />
                  </div>

                  <InputForm
                    classes="inputcon-full mb-4"
                    labelname="Username"
                    name="username"
                    labelClass="block mb-1 text-sm"
                    inputType="text"
                    inputClass="input text-sm"
                    placeholder="username"
                    id="username"
                    onChange={onChange}
                    pattern="^[\w]{3,20}$"
                    title="username is required and must be more than 3 character"
                  />

                  <div className="block md:flex justify-center align-center">
                    <InputForm
                      classes="block inputcon-full mb-4 mr-2"
                      labelname="Password"
                      name="password"
                      labelClass="block mb-1 text-sm"
                      inputType="password"
                      inputClass="input text-sm"
                      placeholder="Password"
                      id="password"
                      onChange={onChange}
                      pattern="^[\w]{8,20}$"
                      title="password is required and must be more than 8 character"
                      autoComplete="off"
                    />
                    <InputForm
                      classes="block inputcon-full mb-4 md:ml-2"
                      labelname="Confirm Password"
                      name="confirmPassword"
                      labelClass="block mb-1 text-sm"
                      inputType="password"
                      inputClass="input text-sm"
                      placeholder="Confirm Password"
                      id="confirmPassword"
                      onChange={onChange}
                      autoComplete="off"
                    />

                  </div>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row justify-end">
                  <p className="flex-grow order-last md:order-first flex items-center my-0 md:my-8 text-sm">
                    {'Have an account? '}
                    <span className="text-purple-650 ml-2 font-semibold cursor-pointer">
                      {'Sign in'}
                    </span>
                  </p>
                  <Button id="register" type="submit" name="Register" classes="btn-purple w-1/3 md:mx-8 my-4 md:my-7" isSubmit={isSubmit} />
                </div>
              </form>
              <div className="order-2 flex flex-grow flex-col items-center relative">
                <hr className="vline hidden md:block" />
                <span>OR</span>
                <hr className="vline hidden md:block" />
              </div>
              <div className="order-1 md:order-3 right-con md:w-108 justify-center">
                <img id="brand-logo" className="hidden md:block" src={brandLogo} alt="Authors Haven" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  error: state.auth.error,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isSubmit: state.auth.isSubmit,
  isCompleted: state.auth.isCompleted
});

/* istanbul ignore next */
export const onSignUp = newUser => signUpAction(newUser);
export const cleanup = () => cleanUpAuth();

export const SingUpComponent = Signup;

export default connect(mapStateToProps, { onSignUp, cleanup })(Signup);
