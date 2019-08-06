import React from 'react';

const Button = ({
  onClick, classes, type, name, children, isSubmit, ...rest
}) => (
  <button
    onClick={onClick}
    className={`btn ${classes}`}
    type={type}
    disabled={isSubmit || false}
    {...rest}
  >
    { !isSubmit ? (children || name) : 'Loading...'}
  </button>
);

export default Button;
