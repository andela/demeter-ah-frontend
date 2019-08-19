import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ArticleCard from '../../components/ArticleCard';
import { viewBookmarkedArticle, viewBookmarkCleanUp } from '../../store/actions/bookmarks';
import { bookmarkArticle, bookmarkArticleCleanUp } from '../../store/actions/bookmarkArticle';
import Loader from '../../components/Loader';
import NoItem from '../../components/NoItem';

const Bookmark = (props) => {
  const {
    articles,
    bookmarkCompleted,
    bookmarkArticleAction,
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  const handleBookmark = async (e) => {
    const { slug } = e.target.dataset;
    await bookmarkArticleAction(slug);
    await props.viewBookmarkedArticle();
    setIsMounted(false);
  };

  const noBookmark = (
    <div className="following">
      <ul className="list w-10/12 md:w-3/5">
        <NoItem message="You do not have any article bookmarked" />
      </ul>
    </div>
  );

  const getBookmarkedArticles = articles.length ? articles.map((article) => {
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
        authorImage
      }
    } = article;
    const date = new Date(createdAt);
    const createdDate = date.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' });

    const articleCategory = category ? category.name : 'Others';
    return (
      <ArticleCard
        key={id}
        title={title}
        description={description}
        image={image}
        bookmark
        slug={slug}
        onBookmark={handleBookmark}
        category={articleCategory}
        autImage={authorImage}
        authorname={`${firstName} ${lastName}`}
        readTime={readTime}
        rating={rating}
        createdAt={createdDate}
      />
    );
  }) : noBookmark;

  const fetchBookmarkedArticle = async () => {
    await props.viewBookmarkedArticle();
    setIsMounted(true);
  };

  useEffect(() => {
    fetchBookmarkedArticle();

    return () => {
      props.viewBookmarkCleanUp();
      props.bookmarkArticleCleanUp();
    };
  }, [bookmarkCompleted]);

  return (
    <Fragment>
      <div className="border-t-2 bg-purple-50 mb-6 overflow-y-auto">
        {getBookmarkedArticles}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  articles: state.bookmarks.articles,
  bookmarkCompleted: state.bookmarkArticle.isCompleted
});

const bookmarkArticleAction = slug => bookmarkArticle(slug);

export default connect(mapStateToProps, {
  viewBookmarkedArticle,
  bookmarkArticleAction,
  viewBookmarkCleanUp,
  bookmarkArticleCleanUp
})(Bookmark);
