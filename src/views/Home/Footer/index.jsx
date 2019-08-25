import React from 'react';
import './index.scss';

const Footer = () => (
  <div className="footer">
    <div className="copyright">
      <p>
        &copy; Copyright 2019.
      </p>
    </div>
    <div className="connect">
      <p className="">Connect with us</p>
      <div className="connect-icons">
        <img
          src="/home/facebook.png"
          className="h-8 w-8"
          alt="Facebook"
        />
        <img
          src="/home/twitter.png"
          className="h-8 w-8"
          alt="Twitter"
        />
        <img
          src="/home/google-plus.png"
          className="h-8 w-8"
          alt="Google"
        />
      </div>
    </div>
    <div className="sub-menu">
      <p>
        FAQs &nbsp;
        Privacy
      </p>
    </div>
  </div>
);

export default Footer;
