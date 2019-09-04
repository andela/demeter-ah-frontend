import React from 'react';
import NoItem from '../../components/NoItem';
import ArticleCard from '../../components/ArticleCard';

const ListArticles = ({
  username, userArticles, addBookmark, showbookmark
}) => {
  const noArticles = (
    <div className="following">
      <ul className="list w-10/12 md:w-3/5">
        <NoItem message={`${username} does not have any articles yet`} />
      </ul>
    </div>
  );
  const showArticles = userArticles.length ? userArticles.map((article) => {
    const {
      id,
      title,
      description,
      slug,
      image,
      rating,
      readTime,
      createdAt,
      category,
      author: {
        firstName,
        lastName,
        authorImage,
      },
      bookmarks
    } = article;
    const hadbeenbookmarked = bookmarks && bookmarks.length;
    const date = new Date(createdAt);
    const createdDate = date.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' });

    const articleCategory = category ? category.name : 'Others';
    return (
      <ArticleCard
        key={id}
        title={title}
        description={description}
        image={image}
        slug={slug}
        emptyBookmark={showbookmark}
        category={articleCategory}
        autImage={authorImage}
        authorname={`${firstName} ${lastName}`}
        authorusername={username}
        readTime={readTime}
        rating={rating}
        createdAt={createdDate}
        addBookmark={addBookmark}
        isBookmarked={hadbeenbookmarked}
      />
    );
  }) : noArticles;

  return showArticles;
};

export default ListArticles;
