import React from 'react';

const dropdown = ({
  classes, onClick, width, height, fill
}) => (
  <svg
    width={width || '11'}
    height={height || '8'}
    viewBox="0 0 11 8"
    fill="none"
    className={classes || ''}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5.46698"
      y="7.50476"
      width="2.70873"
      height="7.82521"
      transform="rotate(-135 5.46698 7.50476)"
      fill={fill || '#a0a0a0'}
    />
    <rect
      x="7.32864"
      y="5.70798"
      width="2.70873"
      height="7.82521"
      transform="rotate(136.839 7.32864 5.70798)"
      fill={fill || '#a0a0a0'}
    />
  </svg>
);

export default dropdown;
