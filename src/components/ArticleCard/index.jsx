import React from 'react';
import { Link } from 'react-router-dom';
import { ImageStyle, authorImage } from '../../utils';
import Star from '../../assets/svgs/starblank';
import Starcolor from '../../assets/svgs/star';
import BookmarkIcon from '../../assets/svgs/bookmarkfill';
import BookmarkEmpty from '../../assets/svgs/bookmark';

const ArticleCard = ({
  image,
  category,
  autImage,
  authorname,
  title,
  description,
  bookmark = false,
  emptyBookmark = false,
  onBookmark,
  slug,
  readTime,
  rating,
  createdAt,
  addBookmark,
  isBookmarked
}) => {
  const loadStar = () => {
    const rate = rating ? Math.floor(rating) : 0;
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < rate) {
        stars.push(<Starcolor key={i} />);
      } else {
        stars.push(<Star key={i} />);
      }
    }
    return stars;
  };

  return (
    <>
      <div className="md:flex md:flex-row flex-row lg:min-w-96 max-w-5xl m-auto text-left justify-start p-2
      bg-white rounded-sm border-b-2 border-gray-350 mb-3 md:min-w-84">
        <div className="m-4 ml-0 min-w-108 min-h-48 rounded shadow-lg sm:min-w-min lg:min-w-96" style={ImageStyle(image || '/article/no-image.png')}>
          <div className="m-5 flex flex-col justify-between h-82">
            <p className="text-xl font-medium text-white lg:mt-0 mt-4">
              {category}
            </p>
            <div className="flex justify-between mt-16">
              <div>
                <div style={authorImage(autImage || '/user.png')} className="h-16 w-16" />
                <p className="text-xl font-medium text-white">{authorname || 'Paul Igabu'}</p>
              </div>
              <span className="h-8 w-8" style={{ alignSelf: 'flex-end', cursor: 'pointer' }}>
                {bookmark ? <BookmarkIcon onClick={onBookmark} slug={slug} /> : ''}
              </span>
              {emptyBookmark && isBookmarked
                ? (
                  <span className="h-8 w-8" style={{ alignSelf: 'flex-end', cursor: 'pointer' }}>
                    <BookmarkIcon onClick={addBookmark} slug={slug} />
                  </span>
                ) : '' }
              {emptyBookmark && !isBookmarked
                ? (
                  <span className="h-8 w-8" style={{ alignSelf: 'flex-end', cursor: 'pointer' }}>
                    <BookmarkEmpty onClick={addBookmark} slug={slug} />
                  </span>
                ) : '' }
            </div>
          </div>
        </div>
        <div className="ml-0 flex-grow-0 justify-between flex flex-col max-h-48">
          <div className="flex flex-col">
            <Link to={`/articles/${slug}`}>
              <h2 className="text-1.5xl lg:text-2xl capitalize">{title || 'Title of this amazing article'}</h2>
            </Link>
            <p className="text-xs">{description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. mus nihil eum iste! Dolorum, voluptatum officiis.'}</p>
          </div>
          <div className="flex justify-between mt-5 lg:min-w-118 md:min-w-96">
            <div className="flex text-sm">
              <p className="pr-10">{readTime || '6 min'}</p>
              <p className="font-semibold">{createdAt || 'July 12 2019'}</p>
            </div>
            <div className="flex items-center">
              {loadStar()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
