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

  return (
    <div className="action share-section">
      <div className="action-con">
        <div className="like-section">
          <button
            onClick={
              () => voteAction({ status: true, slug })
            }
            className={`icons like-icon ${isLiked.status === true ? 'active' : ''}`}
          >
            <LikeIcon />
          </button>
          <p className="like-count">{upVote.length}</p>
        </div>
        <div className="dislike-section">
          <button
            onClick={
              () => voteAction({ status: false, slug })
            }
            className={`icons dislike-icon ${isLiked.status === false ? 'active' : ''}`}
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
