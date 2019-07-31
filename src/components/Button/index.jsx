import React from 'react';

const Button = ({
  clicked, classes, type, name
}) => (
  <button
    onClick={clicked}
    className={`btn ${classes}`}
    type={type}
  >
    {name}
  </button>
);

export default Button;
