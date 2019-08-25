import React from 'react';

const loader = ({ size, fixed }) => (
  <div className={`flex items-center justify-center py-4 ${!fixed ? 'h-72' : ''}`}>
    <img src="/loader.gif" alt="" className={size || 'w-8 h-8'} />
  </div>
);

export default loader;
