import React from 'react';
import { Link } from 'react-router-dom';

const SearchArticleCard = ({
  image,
  category,
  authorname,
  title,
  slug,
  readTime,
  createdAt,
  tags
}) => {
  const setTags = tags && tags.length ? (
    tags.map(tag => (
      <div className="mr-2" key={tag.id}>
        <p className="sm:text-xs md:text-sm rounded-full sm:px-2 md:px-4 cursor-pointer border-2
          border-solid border-purple-200 text-purple-200 bg-white"
        >
          {tag.name}
        </p>
      </div>
    ))
  ) : (
    <p className="text-xs" />
  );

  return (
    <>
      <div className="md:flex md:flex-row flex-row lg:min-w-96 m-auto text-left justify-start pl-4 pt-4 pb-8
        bg-white rounded-sm border-b-2 border-gray-30 mb-0 md:min-w-84"
      >
        <div className="m-4 ml-0 mb-0 w-full h-48 md:w-48 md:h-24 rounded shadow-lg">
          <img src={image || '/placeholder.png'} alt="Article" width="100%" height="100%" className="h-full object-cover" />
        </div>
        <div className="ml-0 flex-grow-0 justify-between flex flex-col max-h-48">
          <div className="flex flex-col">
            <Link to={`/articles/${slug}`}>
              <h2 className="text-1.5xl lg:text-xl capitalize">{title || 'Title of this amazing article'}</h2>
            </Link>
            <h4 className="text-base m-0">
              {'by '}
              <span className="font-semibold">{ authorname || 'Paul Mark'}</span>
            </h4>
          </div>
          <div className="flex justify-between lg:min-w-118 md:min-w-96">
            <div className="flex flex-wrap text-xs">
              <p className="pr-4 mt-1">{category || 'Others'}</p>
              <p className="pr-4 mt-1">{readTime || '6 min'}</p>
              <p className="font-semibold mt-1 pr-4">{createdAt || 'July 12 2019'}</p>
              <div className="flex flex-row mt-2 md:mt-0 ">
                {setTags}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchArticleCard;
