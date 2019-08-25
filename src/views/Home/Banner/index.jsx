import React from 'react';
import './index.scss';

const Banner = () => (
  <div className="banner section-one">
    <div className="welcome">
      <h1>Welcome to Authors Haven</h1>
      <p>
        A platform to share your amazing ideas and articles with the rest of the world
      </p>
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
