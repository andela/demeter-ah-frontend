import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ImageStyle, authorImage } from '../../utils';
import BookmarkIcon from '../../assets/svgs/bookmarkfill';
import BookmarkEmpty from '../../assets/svgs/bookmark';
import Rating from '../Rating';

const ArticleCard = ({
  image,
  category,
  autImage,
  authorname,
  title,
  description,
  bookmark = false,
  emptyBookmark = false,
  onBookmark = () => {},
  slug,
  readTime,
  rating,
  createdAt,
  addBookmark,
  isBookmarked
}) => (
  <Fragment>
    <div className="md:flex md:flex-row flex-row w-full max-w-5xl m-auto text-left justify-start p-2
    bg-white rounded-sm border-b-2 border-gray-350 mb-3 md:min-w-84"
    >
      <div className="m-4 min-w-full ml-0 min-w-108 min-h-46 rounded shadow-lg md:min-w-min lg:min-w-84" style={ImageStyle(image || '/placeholder.png')}>
        <div className="m-5 flex flex-col justify-between h-82">
          <p className="text-xl font-medium text-white lg:mt-0 mt-4">
            {category}
          </p>
          <div className="flex justify-between mt-16">
            <div>
              <Link to={`/profile/${authorname || 'Paul Igabu'}/articles`}>
                <div style={authorImage(autImage || '/dummy.png')} className="h-16 w-16" />
                <p className="text-base text-left font-medium text-white">{authorname || 'Paul Igabu'}</p>
              </Link>
            </div>
            <span className="h-8" style={{ width: 'fit-content', alignSelf: 'flex-end', cursor: 'pointer' }}>
              {bookmark ? <BookmarkIcon onClick={onBookmark} slug={slug} /> : ''}
            </span>
            {emptyBookmark && isBookmarked
              ? (
                <span className="h-8 w-8" style={{ width: 'fit-content', alignSelf: 'flex-end', cursor: 'pointer' }}>
                  <BookmarkIcon onClick={addBookmark} slug={slug} />
                </span>
              ) : '' }
            {emptyBookmark && !isBookmarked
              ? (
                <span className="h-8 w-8" style={{ width: 'fit-content', alignSelf: 'flex-end', cursor: 'pointer' }}>
                  <BookmarkEmpty onClick={addBookmark} slug={slug} />
                </span>
              ) : '' }
          </div>
        </div>
      </div>
      <div className="ml-0 md:ml-8 flex-grow justify-between flex flex-col max-h-48">
        <div className="flex flex-col">
          <Link to={`/articles/${slug}`}>
            <h2 className="text-1.5xl lg:text-2xl capitalize">{title || 'Title of this amazing article'}</h2>
          </Link>
          <p className="text-xs">{description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. mus nihil eum iste! Dolorum, voluptatum officiis.'}</p>
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex w-2/3 justify-between text-sm">
            <p className="pr-10 text-sm xl:text-base">{readTime || '6 min'}</p>
            <p className="font-semibold text-sm xl:text-base">{createdAt || 'July 12 2019'}</p>
          </div>
          <div className="flex w-1/3 justify-end items-center">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ArticleCard;
