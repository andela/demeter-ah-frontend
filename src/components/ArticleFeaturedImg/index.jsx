import React from 'react';

const ArticleFeaturedImg = ({
  featuredImgStyle, image, title
}) => (
    <div className="flex section-one sm:px-0 sm:py-2">
      <div className="min-h-83 flex-1 lg:h-xlx3 pt-24 mt-8" style={featuredImgStyle(image || '/placeholder.png')}>
        <p className="mt-40 text-center mx-auto px-12 mb-2 font-bold text-white text-2xl lg:text-4xl">
          {title}
        </p>
      </div>
    </div>
  );

export default ArticleFeaturedImg;
