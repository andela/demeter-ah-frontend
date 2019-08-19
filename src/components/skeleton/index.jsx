import React from 'react';
import Skeleton from 'react-loading-skeleton';

const index = () => (
  <div className="flex flex-col min-h-screen items-center px-10 py-2">
    <div className="w-full mb-24">
      <Skeleton height={50} />
    </div>
    <div className="w-full flex justify-between items-center px-20">
      <Skeleton width={500} height={200} />
      <Skeleton width={300} height={300} />
    </div>
  </div>
);

export default index;
