import React, { Fragment } from 'react';

const NoItem = ({ message }) => (
  <Fragment>
    <div className="w-full flex h-full justify-center items-center">
      <p className="text-center font-semibold text-lg opacity-25">{message}</p>
    </div>
  </Fragment>
);

export default NoItem;
