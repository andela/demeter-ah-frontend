import React from 'react';

const Label = (props) => {
  const {
    name, labelname, classes, ...rest
  } = props;

  return (
    <label htmlFor={name} {...rest} className={classes}>
      {labelname || name}
    </label>
  );
};

export default Label;
