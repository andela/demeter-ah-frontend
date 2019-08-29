import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as moment from 'moment';
import Reaction from './reaction';
import { updateComment, getComments } from '../../store/actions/Comments';
import './comment.scss';

const EditComment = ({
  commentObj, slug, updateCommentAction, getCommentAction, user
}) => {
  const {
    id, content, highlightedText, author: {
      firstName, lastName, id: userId, image, username
    }, updatedAt, downVote, upVote,
  } = commentObj;
  const [comment, setComment] = useState(content || '');
  const [button, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setComment(e.target.value);
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
            { user.id !== userId ? ' ' : <button type="button" onClick={handleClick} className={`cancel-btn ${button ? 'border px-4 text-gray-250' : 'text-purple-650'}`}>{button ? 'Cancel' : 'Edit'}</button>}
            <span className="bullet rounded-full h-0.5 w-0.5 mx-2 bg-gray-250" />
            <Reaction
              commentId={id}
              ownerId={userId}
              slug={slug}
              downVote={downVote}
              upVote={upVote}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = {
  updateCommentAction: updateComment,
  getCommentAction: getComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
