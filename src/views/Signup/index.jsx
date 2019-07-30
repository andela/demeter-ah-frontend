/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
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
    // if (values.password !== values.confirmPassword) {
    //   const result = e.target.querySelector('#confirmPassword');
    //   result.setCustomValidity('Password must match');
    // }
    props.onSignUp(values);
  };

  return (
    <Fragment>
      <div>

        <form onSubmit={submit}>
          <div>
            <br />
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstName" onChange={onChange} required title="new something" pattern="^[\w]{3,20}$" />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastName" onChange={onChange} />
          </div>
          <div>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" onChange={onChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={onChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={onChange} autoComplete="true" pattern="^[\w]{3,20}$" required />
          </div>
          <div>
            <label htmlFor="confirmPassword">confirm Password</label>
            <input type="password" id="confirmPassword" onChange={onChange} />
          </div>
          <button type="submit">submit</button>
        </form>
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
