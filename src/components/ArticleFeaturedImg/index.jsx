import React from 'react';

const ArticleFeaturedImg = ({
  featuredImgStyle, image, title
}) => (
  <div className="flex section-one sm:px-0 sm:py-2">
    <div className="flex-1 lg:h-xlx3 pt-24 mt-8" style={featuredImgStyle(image || '/article/no-image.png')}>
      <p className=" mt-48 text-center mx-auto px-12 mb-2 font-bold text-white lg:text-4xl">
        { title }
      </p>
    </div>
  </div>
);

export default ArticleFeaturedImg;
