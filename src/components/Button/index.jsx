import React from 'react';

const Button = (props) => {
  const {
    clicked, classes, type, name
  } = props;
  return (
    <button
      onClick={clicked}
      className={classes}
      type={type}
    >
      {name}
    </button>
  );
};

export default Button;
