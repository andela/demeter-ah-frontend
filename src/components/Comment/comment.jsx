/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as moment from 'moment';
import Reaction from './reaction';
import { updateComment, getComments } from '../../store/actions/Comments';
import { getCommentHistory } from '../../store/actions/commentHistory';
import CommentHistory from './commentHistory';
import './comment.scss';
import Loader from '../Loader';

const EditComment = ({
  commentObj,
  slug,
  updateCommentAction,
  getCommentAction,
  user,
  commentHistory,
  fetchCommentHistory,
}) => {
  const {
    id, content, highlightedText, author: {
      firstName, lastName, id: userId, image, username
    }, author, updatedAt, downVote, upVote, commentHistory: edited,
  } = commentObj;
  const [comment, setComment] = useState(content || '');
  const [button, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [commentHistoryList, setcommentHistoryList] = useState('');

  const historyRef = useRef();
  const historyBtn = useRef();

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleGetHistory = () => {
    if (!showHistory) {
      setShowHistory(true);
      fetchCommentHistory(slug, id);
    }
  };

  const hideHistory = (e) => {
    if (historyRef.current && historyRef.current.contains(e.target)) {
      setShowHistory(true);
      return;
    }
    if (historyBtn.current && historyBtn.current.contains(e.target)) {
      setShowHistory(true);
      return;
    }
    setShowHistory(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateCommentAction({
      content: { content: comment },
      slug,
      id,
    });
    await getCommentAction(slug);
    setLoading(false);
    setOpen(false);
  };

  const handleClick = async () => {
    setOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (commentHistory) {
      setcommentHistoryList(commentHistory.map(
        history => (
          <CommentHistory
            key={history.id}
            author={author}
            commentObj={history}
          />
        )
      ));
    }
  }, [commentHistory]);

  useEffect(() => {
    document.addEventListener('click', hideHistory);
    return () => {
      document.removeEventListener('click', hideHistory);
    };
  }, []);

  return (
    <div className="comment flex pt-6 px-4 md:px-10">
      <img src={image || 'https://i.imgur.com/wtjaVfi.png'} className="authorImg shadow-md rounded-full object-cover w-16 h-16 mr-4" alt="" />
      <div className="commentInfo flex-grow">
        <div className="fullname flex flex-wrap justify-start items-center">
          <Link to={`/profile/${username}/articles`}>
            <p className="name text-sm md:text-lg font-bold">
              {`${firstName} ${lastName}`}
            </p>
          </Link>
          <span className="bullet rounded-full p-0.5 mx-2 bg-gray-250" />
          <small className="date text-gray-250 text-xss">
            { moment(updatedAt).fromNow()}
          </small>

          {(edited.length > 0)
            ? (
              <small className="ml-3 text-gray-250 italic text-xss">
             Edited
              </small>
            )
            : ''
          }
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full my-2">
          { !button ? (
            <div>
              <p className="text-left">
                <span className="bg-yellow-200">{highlightedText}</span>
              </p>
              <div name="" id="" rows="auto" className="text-justify h-auto text-sm w-full">{comment}</div>
            </div>
          )
            : <textarea name="commentBox" className="comment-box" value={comment} required onChange={handleChange} />}
          <div className="reactions w-full flex items-center mt-2 ">
            { button ? <button type="submit" className="update-btn">{ loading ? 'Updating' : 'Update'}</button> : ''}
            { user.id !== userId ? ' ' : <button type="button" onClick={handleClick} className={`cancel-btn ${button ? 'border px-4 text-gray-250' : 'text-purple-650 font-bold'}`}>{button ? 'Cancel' : 'Edit'}</button>}
            <span className="bullet rounded-full h-0.5 w-0.5 mx-2 bg-gray-250" />
            <Reaction
              commentId={id}
              ownerId={userId}
              slug={slug}
              downVote={downVote}
              upVote={upVote}
            />
            { (username === user.username && edited.length > 0) ? <button ref={historyBtn} type="button" onClick={handleGetHistory} className="cancel-btn ml-2 text-gray-250 font-bold">{ loading ? 'Getting History' : 'Edit History'}</button> : ''}
          </div>
          {
            showHistory ? (
              <div ref={historyRef} className="edit-history shadow-md pt-2 w-8/12">
                <p className="header text-sm text-left p-3 text-gray-250 bg-gray-10 font-semibold">History</p>
                {!commentHistory
                  ? <Loader fixed />
                  : commentHistory.length > 0
                    ? commentHistoryList
                    : <p className="text-sm text-center p-3 py-5 text-gray-250 ">No Edited History</p>
                 }
              </div>
            ) : ''}
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  commentHistory: state.commentHistory.comments
});

const mapDispatchToProps = {
  updateCommentAction: updateComment,
  getCommentAction: getComments,
  fetchCommentHistory: getCommentHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
