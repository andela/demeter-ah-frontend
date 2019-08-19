import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAuthorArticle } from '../../store/actions/articles';
import Loader from '../../components/Loader';
import ListArticles from './list';
import { bookmarkArticle } from '../../store/actions/bookmarkArticle';

const AuthorArticles = ({
  user, getArticles, match, userArticles, bookmarkArticleAction,
  isAuthenticated
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { username } = match.params;
  const thisUser = user.username;

  const fetchgetArticles = async () => {
    await getArticles(username);
    setIsMounted(true);
  };

  const handleAddBookmark = async (e) => {
    const { slug } = e.target.dataset;
    await bookmarkArticleAction(slug);
    await fetchgetArticles();
    setIsMounted(false);
  };

  useEffect(() => {
    fetchgetArticles();
  }, [isMounted]);
  return (
    <Fragment>
      <div className="overflow-y-auto border-t-2 border-solid border-gray-20">
        <ListArticles
          username={username}
          userArticles={userArticles}
          addBookmark={handleAddBookmark}
          showbookmark={!(thisUser === username) && isAuthenticated}
        />
      </div>
    </Fragment>
  );
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  userArticles: state.articles.usernameArticles
});

const mapDispatchToProps = {
  getArticles: getAuthorArticle,
  bookmarkArticleAction: slug => bookmarkArticle(slug),
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorArticles);
