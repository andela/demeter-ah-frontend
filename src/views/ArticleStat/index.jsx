import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getArticleStats } from '../../store/actions/articles';
import ListArticleStats from '../../components/ListArticleStats';

const ArticleStat = ({ articles, getArticles, user }) => {
  const [stats, setStats] = useState([]);

  const fetchgetArticles = async () => {
    const { username } = user;
    await getArticles(username);
    await setStats(articles);
  };

  const totalArticle = articles.length;

  useEffect(() => {
    if (!stats.length) {
      fetchgetArticles();
      setStats(articles);
    }
  }, []);

  return (
    <Fragment>
      <div className="overflow-y-auto bg-purple-50 h-full border-t-2 border-solid border-gray-20">
        <div className="w-2/3 mx-auto mt-8">
          <div>
            Total Articles (
            <span>{totalArticle}</span>
            )
          </div>
          <ListArticleStats articles={articles} />
        </div>
      </div>
    </Fragment>
  );
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  articles: state.articles.articleStats
});

const mapDispatchToProps = {
  getArticles: getArticleStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleStat);
