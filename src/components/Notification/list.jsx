import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const List = ({
  notifObj: {
    id, link, seen, message, createdAt
  },
  handleNotifRead,
}) => {
  const msgObj = JSON.parse(message);
  const {
    name, msg, article,
  } = msgObj;
  const handleClick = () => {
    handleNotifRead(id);
  };

  return (
    <div onClick={handleClick}>
      <Link to={link} className={`notif-list cursor-pointer ${seen ? 'bg-gray-5' : 'bg-purple-80'}`}>
        <div className="pl-2 pr-4">
          <div
            className={`h-2 w-2 rounded-full ${seen ? 'bg-gray-350' : 'bg-yellow-650'}`}
          />
        </div>
        <p className="notif-info text-left text-sm">
          <strong className="capitalize cursor-pointer">{name}</strong>
          {' '}
          {msg}
          {' '}
          {article ? <strong className="capitalize cursor-pointer">{article}</strong> : ''}
        </p>
        <div className="time flex-grow text-xs px-2 pb-1 absolute bottom-0 right-0">
          <small className="whitespace-no-wrap">
            {moment(createdAt).fromNow()}
          </small>
        </div>
      </Link>
    </div>
  );
};

export default List;
