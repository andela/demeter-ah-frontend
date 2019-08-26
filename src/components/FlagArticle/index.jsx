import React, { Fragment } from 'react';

const FlagArticle = ({ openReportModal }) => (
  <Fragment>
    <div
      className="flex w-6/12 sm:py-2 sm:justify-start md:py-0 lg:py-0 md:justify-end outline-none"
      onClick={openReportModal}
      role="button"
      onKeyPress={openReportModal}
      tabIndex={0}
    >
      <p className="">
        <img
          src="/article/flag.png"
          className="cursor-pointer h-4 w-4"
          alt="Flag this article"
        />
      </p>
      <p className="cursor-pointer ml-1 text-xs text-gray-600">
        Report
      </p>
    </div>
  </Fragment>
);

export default FlagArticle;
