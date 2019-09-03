import React from 'react';
import Skeleton from 'react-loading-skeleton';

const index = ({ hideNav }) => (
  <div className="flex flex-col items-center px-4 md:px-8 lg:px-20 py-2">
    {hideNav ? '' : (
      <div className="w-full mb-4">
        <Skeleton height={50} />
      </div>
    )}
    <div className="w-full mb-10">
      <Skeleton height={400} />
    </div>
    <div className="w-full flex-wrap flex flex-row justify-between items-center">
      <div className="flex mt-4 lg:mt-2">
        <Skeleton circle width={100} component={20} height={100} />
        <div className="mx-4 flex flex-col">
          <Skeleton width={200} height={30} />
          <Skeleton width={80} height={30} />
          <Skeleton width={50} height={30} />
        </div>
      </div>
      <div className="flex flex-col mt-4 lg:mt-2">
        <Skeleton width={300} height={30} />
        <Skeleton width={300} height={30} />
        <Skeleton width={300} height={30} />
      </div>
    </div>
  </div>
);

export default index;
