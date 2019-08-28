import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LikeIcon from '../../assets/svgs/likeIcon';
import DisLikeIcon from '../../assets/svgs/disLike';
import { getComments, voteComment } from '../../store/actions/Comments';
import './index.scss';

const Reaction = ({
  commentId,
  ownerId,
  getCommentAction,
  voteCommentAction,
  isAuthenticated,
  slug,
  upVote,
  downVote,
  user
}) => {
  const [liked, setliked] = useState(false);
  const [disliked, setdisliked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    upVote.some(vote => vote.userUpVote) ? setliked(true) : setliked(false);
    downVote.some(vote => vote.userDownVote) ? setdisliked(true) : setdisliked(false);
  }, [upVote, downVote]);

  const handleLike = async () => {
    if (isAuthenticated && user.id !== ownerId) {
      if (disliked) {
        setdisliked(false);
      }
      setliked(prevState => !prevState);
      if (!loading) {
        setLoading(true);
        await voteCommentAction({ status: true, commentId });
        await getCommentAction(slug);
        setLoading(false);
      }
    }
  };

  const handleDislike = async () => {
    if (isAuthenticated && user.id !== ownerId) {
      if (liked) {
        setliked(false);
      }
      setdisliked(prevState => !prevState);
      if (!loading) {
        setLoading(true);
        await voteCommentAction({ status: false, commentId });
        await getCommentAction(slug);
        setLoading(false);
      }
    }
  };

  return (
    <div className="comment-reaction flex flex-row justify-center items-center">
      <div onClick={handleLike} className={`flex ${(liked) ? 'clicked' : ''}`}>
        <LikeIcon />
        <small className="text-xs text-gray-450 ml-2">{upVote.length}</small>
      </div>
      <span className="bullet rounded-full h-0.5 w-0.5 mx-2 bg-gray-250" />
      <div
        onClick={handleDislike}
        className={`flex ${disliked ? 'clicked' : ''}`}
      >
        <DisLikeIcon />
        <small className="text-xs text-gray-450 ml-2">{downVote.length}</small>
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  getCommentAction: getComments,
  voteCommentAction: voteComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reaction);
