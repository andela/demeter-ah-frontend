import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const RelatedArticles = ({
  articles, relatedArticleImg, description, isLoading
}) => (
  articles && articles.rows && articles.rows.length >= 1 ? (
    articles.rows.map(showArticle => (
      <div className="w-5/12 min-w-40 max-w-85 mt-4 md:mt-0 md:rel related bg-white ml-5" key={showArticle.slug}>
        <Link to={`/articles/${showArticle.slug}`}>
          <div className="cursor-pointer ">
            {!isLoading
              ? <div className="flex-1" style={relatedArticleImg(showArticle.image || '/placeholder.png')}> </div>
              : (
                <div className="w-full">
                  <Skeleton height={162} />
                </div>
              )
            }
            <h2 className="title sm:min-w-12 lg:min-w-102 sm:text-xs-2 md:text-xl px-2">{isLoading ? <Skeleton /> : showArticle.title}</h2>
            {!description ? '' : <p className="pb-4">{description || showArticle.description}</p>}
          </div>
        </Link>
      </div>
    ))
  ) : (
    <p className="text-xs text-center">No related articles yet</p>
  )
);

export default RelatedArticles;
