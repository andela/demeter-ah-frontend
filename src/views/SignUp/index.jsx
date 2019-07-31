import './index.scss';
import React from 'react';
import InputForm from '../../components/InputForm';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

const Signup = () => (
  <div className="signup">
    <NavBar />
    <div
      className="bg"
    >
      <div className="card">
        <h1 className="w-full px-7 mb-0 text-2xl text-purple-650">Sign up</h1>
        <div className="left-con">
          <InputForm
            classes="inputcon-full"
            labelname="Email"
            name="email"
            labelClass="block mb-1"
            inputType="text"
            inputClass="input"
            placeholder="johndoe@examle.com"
          />
          <InputForm
            classes="inputcon-half"
            labelname="First Name"
            name="firstname"
            labelClass="block mb-1"
            inputType="text"
            inputClass="input"
            placeholder="First Name"
          />
          <InputForm
            classes="inputcon-half"
            labelname="Last Name"
            name="lastname"
            labelClass="block mb-1"
            inputType="text"
            inputClass="input"
            placeholder="Last Name"
          />
          <InputForm
            classes="inputcon-full"
            labelname="Username"
            name="username"
            labelClass="block mb-1"
            inputType="text"
            inputClass="input"
            placeholder="Username"
          />
          <InputForm
            classes="inputcon-half"
            labelname="Password"
            name="password"
            labelClass="block mb-1"
            inputType="text"
            inputClass="input"
            placeholder="Password"
          />
          <InputForm
            classes="inputcon-half"
            labelname="Confirm Password"
            name="conf-password"
            labelClass="block mb-1"
            inputType="text"
            inputClass="input"
            placeholder="Confirm Password"
          />
          <div className="w-full flex justify-end">
            <p className="flex-grow mx-2 my-8">
              {'Have an account? '}
              <span className="text-purple-650">
                {'Login'}
              </span>
            </p>
            <Button type="button" name="Register" classes="btn-purple w-1/3 mx-2 my-7" />
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
    </div>
  </div>
);

export default Signup;
