import React from 'react';

const Input = ({ inputType, classes, ...rest }) => (
  <input type={inputType} required className={`shadow border rounded py-1 bg-purple-150 ${classes}`} {...rest} />
);

export default Input;
