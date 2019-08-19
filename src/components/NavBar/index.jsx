import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/articles';
import { AuthNav, CreateArticleNav } from './navComps';
import logo from '../../assets/images/logo.png';
import './index.scss';
import UserNavInfo from '../UserNavInfo';
import Search from '../Search';
import Dropdown from '../Dropdown';

const NavBar = ({ history, isAuthenticated, openModal }) => {
  const [toggle, setToggle] = useState(false);
  const path = history.location.pathname;
  const handleDropDown = () => {
    setToggle(prevState => !prevState);
  };

  const showNavComp = () => (
    <Fragment>
      <UserNavInfo onClick={handleDropDown} />
      {path === '/article/create' ? <CreateArticleNav history={history} openModal={openModal} /> : ''}
      {toggle ? <Dropdown handleDropDown={handleDropDown} /> : ''}
    </Fragment>
  );

  return (
    <nav className="flex items-center justify-between relative flex-wrap bg-white-500 pt-2 p-3 z-40 shadow-md">
      <div className="flex items-center flex-shrink-0 text-dark">
        <Link to="/">
          <img id="logo" src={logo} alt="Author's Haven" />
        </Link>
      </div>
      <div className="flex relative">
        <Search />
        {isAuthenticated ? showNavComp() : <AuthNav />}
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  openModal: actions.openPublishModal,
})(NavBar);
