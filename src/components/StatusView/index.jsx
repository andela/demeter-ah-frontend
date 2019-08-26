import React from 'react';

import './index.scss';

const Status = ({
  width = 'w-full', height = 'h-full',
  status, children = '',
}) => (
    <div className={`${width} ${height} container`}>
      <h3 className="status">{status}</h3>
      <div className="actions">{children}</div>
    </div>
  );

export default Status;
