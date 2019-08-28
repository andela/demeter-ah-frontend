/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CreateComment from './createComment';
import ViewComment from './comment';
import { getComments, commentCleanUp } from '../../store/actions/Comments';
import Loader from '../Loader';

const Comment = ({
  comments, commentNo, slug, getCommentAction, cleanUp, match, authorUsername,
}) => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState('');

  useEffect(() => {
    comments && setCommentList(comments.map(comment => <ViewComment key={comment.id} authorUsername={authorUsername} slug={slug} commentObj={comment} />));
  }, [comments]);

  useEffect(() => {
    setToggle(false);
    cleanUp();
    setCommentList('');
  }, [match.params.slug]);

  const handleDropdown = async () => {
    setLoading(true);
    setToggle(prevState => !prevState);
    if (!toggle) {
      await getCommentAction(slug);
    }
    setLoading(false);
  };

  return (
    <div className="commentSection pb-10 cursor-pointer">
      <div onClick={handleDropdown} className="header w-full text-left py-5 border-gray-50 border-b border-solid">
        <strong className="text-1.5xl font-semibold">{`Comments (${commentNo || 0})`}</strong>
        <p>Start a discussion, not a fire. Post with kindness</p>
      </div>
      {
        toggle
          ? (
            <>
              <CreateComment slug={slug} />
              { loading ? <Loader fixed /> : commentList }
            </>
          )
          : ''
      }
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
});

const mapDispatchToProps = {
  getCommentAction: getComments,
  cleanUp: commentCleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
