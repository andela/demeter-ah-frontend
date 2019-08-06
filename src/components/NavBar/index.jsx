import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/images/logo.png';

const NavBar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-white-500 pt-2 p-3 z-40 shadow">
    <div className="flex w-6/12 sm:w-3/12 lg:w-2/12 items-center md:flex-shrink-0 text-dark mr-6">
      <Link to="/">
        <img id="logo" className="w-full h-full" src={logo} alt="Author's Haven" />
      </Link>
    </div>
    <div className="">
      <Button
        id="signup-menu"
        type="button"
        name="Sign Up"
        classes="btn-purple hidden md:inline w-32"
      />
      <Button
        id="signin-menu"
        type="button"
        name="Sign In"
        classes="btn-white hidden md:inline w-32 ml-2 border border-solid border-purple-650 text-purple-650"
      />
    </div>
  </nav>
);

export default NavBar;
