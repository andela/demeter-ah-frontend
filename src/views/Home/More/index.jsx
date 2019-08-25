import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { relatedArticleImg } from '../../../utils';
import './index.scss';

const Join = () => (
  <div className="join">
    <h1>Join Our Authors Today</h1>
    <Link to="/">
      <Button
        type="button"
        name="Get Started"
        classes="btn-white"
      />
    </Link>
  </div>
);

const Articles = () => (
  <div className="articles">
    <h1>More Articles</h1>
    <div className="list">
      <div className="articles-card">
        <div className="img" style={relatedArticleImg('/article/no-image.png')} />
        <h2 className="title">I want to test the redirect</h2>
      </div>
      <div className="articles-card">
        <div className="img" style={relatedArticleImg('/article/no-image.png')} />
        <h2 className="title">I want to test the redirect</h2>
      </div>
    </div>
    <Link to="/">
      <Button
        type="button"
        classes="btn-white"
        name="Explore"
      />
    </Link>
  </div>
);

const More = () => (
  <>
    <Articles />
    <Join />
  </>
);

export default More;
