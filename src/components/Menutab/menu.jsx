import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = ({ children, to }) => (
  <div className="menu h-12 flex relative flex-grow w-1/6 max-w-42 bg-white">
    <NavLink
      className="flex w-full text-gray-250 border-solid border-b-2 border-transparent text-center flext text-sm items-center justify-center"
      to={to}
    >
      {children}
    </NavLink>
  </div>
);

export default menu;
