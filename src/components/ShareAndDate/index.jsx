import React, { Fragment } from 'react';
import * as moment from 'moment';
import openTwitter from './Social/twitter';
import openFacebook from './Social/facebook';
import openMail from './Social/mail';
import Rating from '../Rating';


const ShareAndDate = ({
  createdAt, category, url, content, title, description, rating
}) => (
    <Fragment>
      <div className="flex flex-col right text-center">
        <div className="flex flex-row justify-start md:justify-end">
          <button className="facebook mr-0 mt-4 mb-2" onClick={() => openFacebook(url, content, title, description)}>
            <img
              src="/article/face.png"
              className="cursor-pointer h-8 w-8"
              alt="Share on Facebook"
            />
          </button>
          <button className="twitter ml-4 mt-4 mb-2" onClick={() => openTwitter(url, content)}>
            <img
              src="/article/twitter.png"
              className="cursor-pointer h-8 w-8"
              alt="Share on Twitter"
            />
          </button>
          <button className="mail ml-4 mt-4 mb-2" onClick={() => openMail(url, title)}>
            <img
              src="/article/mail.png"
              className="cursor-pointer h-8 w-8"
              alt="Share via Email"
            />
          </button>
        </div>
        <div className="flex flex-row justify-start md:justify-end sm:text-sm text-gray-600">
          <p>
            Posted on
            {' '}
            <strong>
              {moment(createdAt).format('MMMM DD YYYY hh:mm A')}
            </strong>
            {' '}
            in
            {' '}
            <strong>{category && category.name}</strong>
          </p>
        </div>
        <div className="flex flex-row justify-start md:justify-end items-center">
          <div className="facebook mr-0 mt-3 mr-2 mb-2">
            <p className="text-xs text-gray-600">Rating: 4.9</p>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </Fragment>
  );

export default ShareAndDate;
