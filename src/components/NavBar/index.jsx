import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/images/logo.png';

const NavBar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-white-500 pt-2 p-3 z-40 shadow-md">
    <div className="flex items-center flex-shrink-0 text-dark mr-6">
      <Link to="/">
        <img
          id="logo"
          className="w-3/12"
          src={logo}
          alt="Author's Haven"
        />
      </Link>
    </div>
    <div className="">
      <Link to="/signup">
        <Button id="signup-menu" type="button" name="Sign Up" classes="btn-purple w-32 hidden md:inline" />
      </Link>
      <Link to="/signin">
        <Button
          id="signin-menu"
          type="button"
          name="Sign In"
          classes="cursor-pointer btn-white w-32 ml-2 text-purple-650 border hidden md:inline border-solid border-purple-650"
        />
      </Link>
    </div>
  </nav>
);

export default NavBar;
