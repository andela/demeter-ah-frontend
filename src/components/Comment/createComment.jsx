import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postComment, getComments } from '../../store/actions/Comments';
import { viewArticleAction } from '../../store/actions/viewArticle';

const CreateComment = ({
  slug,
  user,
  getCommentAction,
  postCommentAction,
  isAuthenticated,
  fetchArticle,
}) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await postCommentAction({
      content: { content: comment },
      slug,
    });
    setComment('');
    await getCommentAction(slug);
    setLoading(false);
    fetchArticle(slug);
  };
  return !isAuthenticated
    ? ''
    : (
      <div className="createComment flex pt-10 px-4 md:px-10 w-full">
        <img
          src={(user && user.image) || 'https://i.imgur.com/wtjaVfi.png'}
          className="shadow-md rounded-full w-16 h-16 mr-4 object-cover"
          alt=""
        />
        <form onSubmit={handleSubmit} className="flex-grow flex-col">
          <textarea
            name="commentBox"
            className="border rounded-full resize-none text-xs border-gray-50 p-3 text-sm w-full"
            required
            placeholder="Add a Comment..."
            value={comment}
            onChange={handleChange}
          />
          <div className="w-full flex justify-end">
            <button
              disabled={loading}
              type="submit"
              className="text-xs border border-solid border-purple-250 text-purple-250 rounded-lg h-8 px-4 mr-0"
            >
              {loading ? 'Loading...' : 'Comment'}
            </button>
          </div>
        </form>
      </div>
    );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  postCommentAction: postComment,
  getCommentAction: getComments,
  fetchArticle: viewArticleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
