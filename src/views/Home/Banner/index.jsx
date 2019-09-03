import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Button from '../../../components/Button';

const Banner = () => (
  <div className="banner section-one">
    <div className="welcome text-center lg:text-justify">
      <h1>Welcome to Authors Haven</h1>
      <p>
        A platform to share your amazing ideas and articles with the rest of the world
      </p>
      <Link to="/article-listing">
        <Button
          type="button"
          name="Explore"
          classes="cursor-pointer btn-white w-32 my-4 text-purple-650 border mx-auto md:mx-0 border-solid border-purple-650"
        />
      </Link>
    </div>
    <div className="welcome-img">
      <img
        src="/home/home-section-1.png"
        className="w-full h-full"
        alt="Authors Haven"
      />
    </div>
  </div>
);

export default Banner;
