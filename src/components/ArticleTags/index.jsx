import React from 'react';

const ArticleFlag = ({ setTags }) => (
  <div className="flex w-6/12 flex-row">
    <div className="mt-3 mr-2">
      <p className="sm:text-xs md:text-sm text-gray-600">Tags: </p>
    </div>
    {setTags}
  </div>
);

export default ArticleFlag;
