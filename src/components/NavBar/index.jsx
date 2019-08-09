import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../../store/actions/articles';
import { AuthNav, CreateArticleNav } from './navComps';
import logo from '../../assets/images/logo.png';

const NavBar = ({ history, openModal }) => {
  const showNavComp = (path) => {
    if (path === '/signup' || path === '/signin' || path === '/reset-password' || path === '/') {
      return <AuthNav history={history} />;
    }
    if (path === '/article/create') {
      return <CreateArticleNav history={history} openModal={openModal} />;
    }
  };
  return (
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
      <div className="flex w-56 justify-between">
        {
          showNavComp(history.location.pathname)
        }
      </div>
    </nav>
  );
};

const matchDispatchToProps = {
  openModal: actions.openPublishModal
};

export const NavBarComp = NavBar;
export default connect(null, matchDispatchToProps)(withRouter(NavBar));
