import React from 'react';
import moment from 'moment';

const CommentHistory = ({
  author: { firstName, lastName, image },
  commentObj,
}) => {
  const { content, createdAt } = commentObj;

  return (
    <div className="text-left flex items-center px-2 text-sm border-b border-gray-40 py-2 text-gray-250">
      <img src={image || '/dummy.png'} className="authorImg shadow-md rounded-full object-cover w-10 h-10 mr-4" alt="" />
      <div className="flex-grow">
        <p className="text-sm font-semibold">
          {`${firstName} ${lastName}`}
        </p>
        <p className="">{content}</p>
        <p className="text-right text-xxs">{ moment(createdAt).fromNow()}</p>
      </div>
    </div>
  );
};


export default CommentHistory;
