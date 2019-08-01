import React from 'react';

const Button = (props) => {
  const {
    clicked, classes, type, name, isSubmit, ...rest
  } = props;
  return (
    <button
      onClick={clicked}
      className={classes}
      type={type}
      disabled={isSubmit}
      {...rest}
    >
      {name}
    </button>
  );
};

export default Button;
