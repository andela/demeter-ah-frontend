import React from 'react';
import './index.scss';

const Input = ({ inputType, classes, ...rest }) => (
  <input type={inputType} required className={`forminput rounded py-2 bg-purple-150 ${classes}`} {...rest} />
);

export default Input;
