import React from 'react';

const Filter = ({ onChange }) => (
  <div className="absolute z-40 w-full flex flex-col shadow-md">
    <div className="w-full py-2 bg-white text-center">
      <input
        type="text"
        name="author"
        placeholder="Author"
        className="bg-gray-30 p-2 text-gray-550 text-xs2 mx-2 mt-2 p-2 w-4/5 rounded"
        autoComplete="off"
        onChange={onChange}
      />
      <hr className="hline bg-gray-30 h-1 w-4/5" />
      <input
        type="text"
        name="tag"
        placeholder="Tag"
        className="bg-gray-30 p-2 text-gray-550 text-xs2 mx-2 mb-2 p-2 w-4/5 rounded"
        autoComplete="off"
        onChange={onChange}
      />
    </div>
  </div>
);

export default Filter;
