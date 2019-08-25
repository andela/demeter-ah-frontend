import React from 'react';
import './index.scss';

const Display = ({
  type, title, body, bg,
}) => (
  <div className={type}>
    <div className={`${type}-content`}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
    <div className={`${type}-img`}>
      <img
        src={bg}
        className="w-full h-full"
        alt="Authors Haven"
      />
    </div>
  </div>

);

const About = () => (
  <div className="about">
    <h1>About us</h1>
    <Display
      title="Be Outstanding"
      body="Reach out to over 1 million readers from the comfort
      of your home"
      type="outstanding"
      bg="/home/home-section-3.png"
    />
    <Display
      title="Share Ideas"
      body="Share your knowledge with other writers and
    get opinions"
      type="ideas"
      bg="/home/home-section-4.png"
    />
  </div>
);

export default About;
