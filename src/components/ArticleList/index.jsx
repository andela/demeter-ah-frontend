import React from 'react';
import ArticleCard from '../ArticleCard';

const ArticleList = ({
  articles, onBookmark, auth
}) => (
    <div className="list">
      <ul className="list-articles">
        {
          articles.map(({ author, category, bookmarks, ...rest }) => (
            <li key={rest.id} className="list-article">
              <ArticleCard
                key={rest.id}
                title={rest.title}
                description={rest.description}
                image={rest.image}
                onBookmark={onBookmark}
                addBookmark={onBookmark}
                isBookmarked={bookmarks && bookmarks.length}
                emptyBookmark={!(auth.user.username === author.username) && auth.isAuthenticated}
                slug={rest.slug}
                category={category ? category.name : 'others'}
                autImage={author.image}
                authorname={`${author.username}`}
                authorusername={author.username}
                readTime={rest.readTime}
                rating={rest.rating}
                createdAt={rest.createdDate}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );

export default ArticleList;
