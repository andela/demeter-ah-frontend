import React, { Fragment } from 'react';
import Star from '../../assets/svgs/starblank';
import Starcolor from '../../assets/svgs/star';

const Stars = ({ rating }) => {
  const loadStar = () => {
    const rate = rating ? Math.floor(rating) : 0;
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < rate) {
        stars.push(<Starcolor key={i} />);
      } else {
        stars.push(<Star key={i} />);
      }
    }
    return stars;
  };
  return (
    loadStar()
  );
};

export default Stars;
