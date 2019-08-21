import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/images/dummy-profile-pic.png';

const AuthorProfile = ({ author, readTime }) => (
  <div className="flex-1 left text-center ">
    <div className="flex sm:flex-row flex-wrap">
      <img
        src={author && author.image ? author.image : profilePic}
        className="m-1 bg-purple-650 object-cover rounded-full sm:h-20 sm:w-20 md:w-20 md:h-20 lg:h-24 lg:w-24 flex"
        alt="Author"
      />
      <div className="text-left">
        <Link to={`/profile/${author && author.username}/articles`} className="cursor-pointer pl-4 text-gray-600">
          <p className="sm:text-base md:text-lg ml-4">
            { author && author.firstName }
            {' '}
            { author && author.lastName }
          </p>
          <p className="sm:text-sm md:text-base ml-4">
                      @
            { author && author.username }
          </p>
        </Link>
        <div className="flex flex-row">
          <div className="m-2">
            <p className="sm:text-xs md:text-sm rounded-full sm:px-3 md:py-1 md:px-4 cursor-pointer border-2 border-solid border-purple-200 text-purple-200 bg-white">Follow</p>
          </div>
          <div className="md:m-0 sm:m-3 lg:m-4 flex justify-center items-center">
            <p className="sm:text-xs md:text-xs lg:text-sm text-gray-600">{ readTime }</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AuthorProfile;
