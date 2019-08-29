import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { relatedArticleImg } from '../../../utils';
import './index.scss';

const Join = () => (
  <div className="join">
    <h1>Join Our Authors Today</h1>
    <Link to="/signin">
      <Button
        type="button"
        name="Get Started"
        classes="btn-white"
      />
    </Link>
  </div>
);

const Articles = ({ articles }) => (
  <div className="articles">
    <h1>More Articles</h1>
    <div className="list">
      <div className="articles-card">
        <div
          className="img"
          style={relatedArticleImg(`${articles[4] && articles[3].image ? articles[3].image : '/placeholder.png'}`)}
        />
        <h2 className="title">{articles[3] && articles[3].title ? articles[3].title : 'Article'}</h2>
      </div>
      <div className="articles-card">
        <div className="img" style={relatedArticleImg(`${articles[4] && articles[4].image ? articles[4].image : '/placeholder.png'}`)} />
        <h2 className="title">{articles[4] && articles[4].title ? articles[4].title : 'Article'}</h2>
      </div>
    </div>
    <Link to="/article-listing">
      <Button
        type="button"
        classes="btn-white"
        name="Explore"
      />
    </Link>
  </div>
);

const More = ({ articles }) => (
  <>
    <Articles articles={articles} />
    <Join />
  </>
);

export default More;
