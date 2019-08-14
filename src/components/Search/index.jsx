import React from 'react';
import SearchIcon from '../../assets/svgs/searchIcon';
import './index.scss';

const search = () => (
  <div className="search relative flex items-center justify-center p-0 mr-6">
    <input
      className="border hidden md:inline-flex border-solid border-gray-350 bg-gray-20 rounded-4xl h-9 w-64 pr-2 pl-4"
      placeholder="Search..."
      type="text"
    />
    <SearchIcon classes="searchIcon cursor-pointer absolute right-0" />
  </div>
);

export default search;
