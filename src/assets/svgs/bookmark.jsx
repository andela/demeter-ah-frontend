import React from 'react';

const Bookmark = ({ onClick, slug }) => (
  <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} data-slug={slug}>
    <g filter="url(#filter0_d)">
      <path d="M4 0H21V27L12.6809 17.7078L4 27V0Z" stroke="white" strokeWidth="2" />
    </g>
    <defs>
      <filter id="filter0_d" x="0" y="0" width="29" height="42.2323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default Bookmark;
