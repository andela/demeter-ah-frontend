import React from 'react';

const Button = (props) => {
  const {
    clicked, classes, type, name, children, isSubmit, ...rest
  } = props;
  return (
    <button
      onClick={clicked}
      className={`btn ${classes}`}
      type={type}
      disabled={isSubmit}
      {...rest}
    >
      {children || name}
    </button>
  );
};

export default Button;
