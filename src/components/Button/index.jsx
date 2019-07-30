import React from 'react';

const Button = (props) => {
  const { classes, type, name } = props;
  return (
    <button className={classes} type={type}>
      {name}
    </button>
  );
};

export default Button;
