import React from 'react';
import Pagination from 'react-js-pagination';
import './index.scss';

const Paginator = ({
  rowPerPage,
  totalRows,
  handlePageChange,
  activePage,
}) => (
  <div className="paginator">
    <Pagination
      pageRangeDisplayed={5}
      activePage={activePage}
      itemsCountPerPage={rowPerPage}
      totalItemsCount={totalRows}
      onChange={handlePageChange}
    />
  </div>
);

export default Paginator;
