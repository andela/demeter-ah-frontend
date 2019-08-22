import React from 'react';
import comment from '../../assets/images/article/comment.png';
import LikeIcon from '../../assets/svgs/likeIcon';
import DisLikeIcon from '../../assets/svgs/disLike';
import Bookmark from '../../assets/svgs/bookmarksm';
import './index.scss';

const Reactions = ({
  isAuthenticated, articleAuthorUsername, isBookmarked, authUsername,
  viewComment, commentNo, bookmarkArticle, voteAction,
  article: { upVote = [], downVote = [], slug } = {}, user
}) => {
  const notbookmarked = (<Bookmark onClick={bookmarkArticle} isBookmarked slug={slug} />);
  const bookmarked = (
    <span className="bookmarkIconFill">
      {notbookmarked}
    </span>
  );

  const isLiked = [...upVote, ...downVote].find(
    vote => vote.user.username === user.username
  ) || { status: null };

  const [like, setLike] = React.useState(false);
  const [dislike, setDislike] = React.useState(false);
  const [isVoting, setVoting] = React.useState(false);

  const handleLike = async (status) => {
    setVoting(true);
    setLike(!like);
    setDislike(false);
    await voteAction({ status, slug });
    setVoting(false);
  };

  const handleDisLike = async (status) => {
    setVoting(true);
    setDislike(!dislike);
    setLike(false);
    await voteAction({ status, slug });
    setVoting(false);
  };

  return (
    <div className="action share-section">
      <div className="action-con">
        <div className="like-section">
          <button
            disabled={isVoting}
            onClick={
              () => handleLike(true)
            }
            className={`icons like-icon ${(isVoting ? like : isLiked.status === true) ? 'active' : ''}`}
          >
            <LikeIcon />
          </button>
          <p className="like-count">{upVote.length}</p>
        </div>
        <div className="dislike-section">
          <button
            disabled={isVoting}
            onClick={
              () => handleDisLike(false)
            }
            className={`icons dislike-icon ${(isVoting ? dislike : isLiked.status === false) ? 'active' : ''}`}
          >
            <DisLikeIcon />
          </button>
          <p className="dislike-count">{downVote.length}</p>
        </div>
        <div className="comment-section">
          <button onClick={viewComment} className="comment-icon icons">
            <img
              src={comment}
              className="comment-img"
              alt="Comment"
            />
          </button>
          <p className="comment-count">{commentNo}</p>
        </div>
        <div className="bookmark-section">
          <button className="bookmark-icon">
            {isAuthenticated && (articleAuthorUsername !== authUsername) && isBookmarked ? bookmarked : ''}
            {isAuthenticated && (articleAuthorUsername !== authUsername) && !isBookmarked ? notbookmarked : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reactions;
