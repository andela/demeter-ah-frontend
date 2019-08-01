import './index.scss';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import InputForm from '../../components/InputForm';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import { signUpAction } from '../../store/actions/auth';
import '../../styles/react-toastify.css';

const Signup = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { isSubmit } = props;

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      toast.error(<h4 className="text-center">password must match</h4>);
      return;
    }
    props.onSignUp(values);
  };

  return (
    <Fragment>
      <div className="signup">
        <NavBar />
        <div
          className="bg card-wrapper flex justify-center items-center"
        >
          <div className="card">
            <form onSubmit={submit} className="left-con">
              <h1 className="w-full mb-4 text-2xl text-purple-650 font-semibold">Sign up</h1>
              <div className="input-wrap pr-8 flex flex-col justify-center w-full mt-4">
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
                  autoComplete="off"
                  pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
                  title="must be a valid email"
                />
                <div className="flex justify-center align-center">
                  <InputForm
                    classes="inputcon-half mb-4 mr-2"
                    labelname="First Name"
                    name="firstname"
                    labelClass="block mb-1 text-sm"
                    inputType="text"
                    inputClass="input text-sm"
                    placeholder="First Name"
                    onChange={onChange}
                    id="firstName"
                    pattern="^[\w]{3,20}$"
                    title="first name is required and must be more than 3 character"
                    autoComplete="off"
                  />

                  <InputForm
                    classes="inputcon-half mb-4 ml-2"
                    labelname="Last Name"
                    name="lastname"
                    labelClass="block mb-1 text-sm"
                    inputType="text"
                    inputClass="input text-sm"
                    placeholder="Last Name"
                    id="lastName"
                    onChange={onChange}
                    pattern="^[\w]{3,20}$"
                    title="last name is required and must be more than 3 character"
                    autoComplete="off"
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
                  autoComplete="off"
                />

                <div className="flex justify-center align-center">
                  <InputForm
                    classes="inputcon-half mb-4 mr-2"
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
                    classes="inputcon-half mb-4 ml-2"
                    labelname="Confirm Password"
                    name="conf-password"
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
              <div className="w-full flex justify-end">
                <p className="flex-grow flex items-center my-8 text-sm">
                  {'Have an account? '}
                  <span className="text-purple-650 ml-2 font-semibold cursor-pointer">
                    {'Sign in'}
                  </span>
                </p>
                <Button id="register" type="button" name="Register" classes="btn-purple w-1/3 mx-8 my-7" isSubmit={isSubmit} />
              </div>
            </form>
            <div className="flex flex-grow flex-col items-center relative">
              <hr className="vline" />
              <span>OR</span>
              <hr className="vline" />
            </div>
            <div className="right-con flex justify-center">
              <img id="brand-logo" src="./src/assets/images/brand-logo.png" alt="Authors Haven" />
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
  isSubmit: state.auth.isSubmit
});

const mapDispatchToProps = dispatch => ({
  onSignUp: (newUser, history) => dispatch(signUpAction(newUser, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
