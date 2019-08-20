import React from 'react';
import load from '../../assets/images/loader.gif';

const loader = ({ size }) => (
  <div className="h-72 flex items-center justify-center">
    <img src={load} alt="" className={size || 'w-8 h-8'} />
  </div>
);

export default loader;
