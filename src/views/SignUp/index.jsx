import './index.scss';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import InputForm from '../../components/InputForm';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import { signUpAction } from '../../store/actions/auth';

const Signup = (props) => {
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
    setValues(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      const result = e.target.querySelector('#confirmPassword');
      result.setCustomValidity('Password must match');
    }
    props.onSignUp(values);
  };

  return (
    <Fragment>
      <div className="signup">
        <NavBar />
        <div
          className="bg"
        >
          <form onSubmit={submit}>
            <div className="card">
              <h1 className="w-full px-7 mb-0 text-2xl text-purple-650">Sign up</h1>
              <div className="left-con">
                <InputForm
                  classes="inputcon-full"
                  labelname="Email"
                  name="email"
                  labelClass="block mb-1"
                  inputType="text"
                  id="email"
                  inputClass="input"
                  placeholder="johndoe@examle.com"
                  onChange={onChange}
                  autoComplete="off"
                  pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
                  title="must be a valid email"
                />
                <InputForm
                  classes="inputcon-half"
                  labelname="First Name"
                  name="firstname"
                  labelClass="block mb-1"
                  inputType="text"
                  inputClass="input"
                  placeholder="First Name"
                  onChange={onChange}
                  id="firstName"
                  pattern="^[\w]{3,20}$"
                  title="first name is required and must be more than 3 character"
                  autoComplete="off"
                />
                <InputForm
                  classes="inputcon-half"
                  labelname="Last Name"
                  name="lastname"
                  labelClass="block mb-1"
                  inputType="text"
                  inputClass="input"
                  placeholder="Last Name"
                  id="lastName"
                  onChange={onChange}
                  pattern="^[\w]{3,20}$"
                  title="last name is required and must be more than 3 character"
                  autoComplete="off"
                />
                <InputForm
                  classes="inputcon-full"
                  labelname="Username"
                  name="username"
                  labelClass="block mb-1"
                  inputType="text"
                  inputClass="input"
                  placeholder="username"
                  id="username"
                  onChange={onChange}
                  pattern="^[\w]{3,20}$"
                  title="username is required and must be more than 3 character"
                  autoComplete="off"
                />
                <InputForm
                  classes="inputcon-half"
                  labelname="Password"
                  name="password"
                  labelClass="block mb-1"
                  inputType="password"
                  inputClass="input"
                  placeholder="Password"
                  id="password"
                  onChange={onChange}
                  pattern="^[\w]{8,20}$"
                  title="password is required and must be more than 8 character"
                  autoComplete="off"
                />
                <InputForm
                  classes="inputcon-half"
                  labelname="Confirm Password"
                  name="conf-password"
                  labelClass="block mb-1"
                  inputType="password"
                  inputClass="input"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  onChange={onChange}
                  autoComplete="off"
                />
                <div className="w-full flex justify-end">
                  <p className="flex-grow mx-2 my-8">
                    {'Have an account? '}
                    <span className="text-purple-650">
                      {'Login'}
                    </span>
                  </p>
                  <Button type="submit" name="Register" classes="btn-purple w-1/3 mx-2 my-7" />
                </div>
              </div>
              <div className="flex flex-col items-center relative">
                <hr className="vline" />
                <span>Or</span>
                <hr className="vline" />
              </div>
              <div className="right-con">
                <img src="./src/assets/images/brand-logo.png" alt="Authors Haven" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  error: state.auth.error,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  onSignUp: (newUser, history) => dispatch(signUpAction(newUser, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
