import React from 'react';
import Input from '../Input';
import Label from '../Label';

const InputForm = ({
  labelname, name, inputType,
  classes, inputClass, labelClass, ...rest
}) => (
  <div className={classes}>
    <Label labelname={labelname} name={name} classes={labelClass} />
    <Input inputType={inputType} name={name} classes={inputClass} {...rest} />
  </div>
);

export default InputForm;
