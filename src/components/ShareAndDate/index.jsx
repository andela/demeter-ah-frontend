import React from 'react';
import * as moment from 'moment';
import Star from '../../assets/svgs/star';
import facebookShare from '../../assets/images/article/face.png';
import twitterShare from '../../assets/images/article/twitter.png';
import mailShare from '../../assets/images/article/mail.png';
import openTwitter from './Social/twitter';
import openFacebook from './Social/facebook';
import openMail from './Social/mail';


const ShareAndDate = ({
  createdAt, category, url, content, title, description
}) => (
  <div className="flex flex-col right text-center">
    <div className="flex flex-row justify-start md:justify-end">
      <button className="facebook mr-0 mt-4 mb-2" onClick={() => openFacebook(url, content, title, description)}>
        <img
          src={facebookShare}
          className="cursor-pointer h-8 w-8 opacity-50"
          alt="Share on Facebook"
        />
      </button>
      <button className="twitter ml-4 mt-4 mb-2" onClick={() => openTwitter(url, content)}>
        <img
          src={twitterShare}
          className="cursor-pointer h-8 w-8 opacity-50"
          alt="Share on Twitter"
        />
      </button>
      <button className="mail ml-4 mt-4 mb-2" onClick={() => openMail(url, title)}>
        <img
          src={mailShare}
          className="cursor-pointer h-8 w-8 opacity-50"
          alt="Share via Email"
        />
      </button>
    </div>
    <div className="flex flex-row justify-start md:justify-end sm:text-sm text-gray-600">
      <p>
         Posted on
        {' '}
        <strong>
          {moment(createdAt).format('MMMM DD YYYY hh:mm A') }
        </strong>
        {' '}
          in
        {' '}
        <strong>{ category && category.name }</strong>
      </p>
    </div>
    <div className="flex flex-row justify-start md:justify-end">
      <div className="facebook mr-0 mt-3 mr-2 mb-2">
        <p className="text-xs text-gray-600">Rating: 4.9</p>
      </div>
      <div className="facebook mr-0 mt-3 mb-2">
        <Star />
      </div>
      <div className="facebook mr-0 mt-3 mb-2">
        <Star />
      </div>
      <div className="facebook mr-0 mt-3 mb-2">
        <Star />
      </div>
      <div className="facebook mr-0 mt-3 mb-2">
        <Star />
      </div>
      <div className="facebook mr-0 mt-3 mb-2">
        <Star />
      </div>
    </div>
  </div>
);

export default ShareAndDate;
