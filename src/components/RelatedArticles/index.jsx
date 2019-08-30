import React from 'react';
import { Link } from 'react-router-dom';

const RelatedArticles = ({ articles, relatedArticleImg, description }) => (
  articles && articles.rows && articles.rows.length >= 1 ? (
    articles.rows.map(showArticle => (
      <div className="w-6/12 md:rel related bg-white ml-5" key={showArticle.slug}>
        <Link to={`/articles/${showArticle.slug}`}>
          <div className="cursor-pointer ">
            <div className="flex-1" style={relatedArticleImg(showArticle.image || '/placeholder.png')}> </div>
            <h2 className="title sm:min-w-12 lg:min-w-102 sm:text-xs-2 md:text-xl lg:text-2xl">{showArticle.title}</h2>
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
