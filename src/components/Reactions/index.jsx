import React from 'react';
import comment from '../../assets/images/article/comment.png';
import LikeIcon from '../../assets/svgs/likeIcon';
import DisLikeIcon from '../../assets/svgs/disLike';
import Bookmark from '../../assets/svgs/bookmark';

const Reactions = () => (
  <div className="action md:flex-col px-5 share-section md:fixed left-0 top-1/2 mb-8 z-10">
    <div className="sm:flex md:flex-col md:py-12 px-2">
      <div className="md:flex-col text-center m-2">
        <div className="flex mx-auto justify-center items-center rounded-full cursor-pointer icons w-10 h-10 bg-white">
          <LikeIcon />
        </div>
        <p className="text-sm mx-auto text-gray-600">5</p>
      </div>
      <div className="md:flex-col text-center m-2">
        <div className="flex mx-auto justify-center items-center rounded-full cursor-pointer icons w-10 h-10 bg-white">
          <DisLikeIcon />
        </div>
        <p className="text-sm mx-auto text-gray-600">3</p>
      </div>
      <div className="md:flex-col text-center m-2">
        <div className="flex mx-auto justify-center items-center rounded-full cursor-pointer icons w-10 h-10 bg-white">
          <img
            src={comment}
            className="cursor-pointer h-4 w-5"
            alt="Comment"
          />
        </div>
        <p className="text-sm mx-auto text-gray-600">2</p>
      </div>
      <div className="sm:mt-4 sm:ml-5 md:ml-0 md:flex-col text-center">
        <div className="flex mx-auto justify-center items-center cursor-pointer">
          <Bookmark />
        </div>
      </div>
    </div>
  </div>
);

export default Reactions;
