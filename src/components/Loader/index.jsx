import React from 'react';
import load from '../../assets/images/loader.gif';

const loader = () => (
  <div className="h-72 flex items-center justify-center">
    <img src={load} alt="" className="w-12 h-12" />
  </div>
);

export default loader;
