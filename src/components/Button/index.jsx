import React from 'react';

const Button = ({ classes, type, name }) => (
  <button className={`btn ${classes}`} type={type}>
    {name}
  </button>
);

export default Button;
