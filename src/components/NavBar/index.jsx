import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const NavBar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-white-500 pt-2 p-3 z-40 shadow">
    <div className="flex items-center flex-shrink-0 text-dark mr-6">
      <Link to="/">
        <img className="w-4/12" src="src/assets/images/logo.png" alt="Author's Haven" />
      </Link>
    </div>
    <div className="">
      <Button type="button" name="Sign Up" classes="btn-purple" />
      <Button type="button" name="Sign In" classes="btn-white ml-2" />
    </div>
  </nav>
);

export default NavBar;
