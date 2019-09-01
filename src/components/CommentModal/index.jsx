import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { postComment, getComments } from '../../store/actions/Comments';
import { viewArticleAction } from '../../store/actions/viewArticle';

const CommentModal = ({
  slug,
  closeModal,
  highlightedText,
  getCommentAction,
  postCommentAction,
  isAuthenticated,
  fetchArticle,
}) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setComment((e.target.value).trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await postCommentAction({
      content: {
        content: comment,
        highlightedText,
      },
      slug,
    });
    setComment('');
    await getCommentAction(slug);
    setLoading(false);
    closeModal();
    fetchArticle(slug);
  };

  return !isAuthenticated
    ? ''
    : (
      <Fragment>
        <div className="shade">
          <div className="wrapper w-11/12 lg:w-6/12 max-w-118">
            <div className="flex justify-between items-center px-4">
              <h2>Add your comment</h2>
              <span
                className="items-center cursor-pointer outline-none"
                onClick={closeModal}
                role="button"
                onKeyPress={closeModal}
                tabIndex={0}
              >
                X
              </span>
            </div>
            <p className="pl-4">
              <span>Text Higlighted: </span>
              <span className="bg-yellow-200">{highlightedText}</span>
            </p>
            <form onSubmit={handleSubmit} className="flex-grow flex-col p-4">
              <textarea
                className="border rounded-1xl resize-none text-xs border-gray-50 p-3 text-sm w-full pb-4"
                required
                placeholder="write your message here"
                name="body"
                onChange={handleChange}
              />
              <div className="w-full flex justify-end pt-5">
                {(comment)
                  ? (
                    <button
                      disabled={loading}
                      type="submit"
                      className="text-xs border-2 border-solid border-purple-250 text-purple-250 rounded-lg h-8 mr-0 px-8"
                    >
                      {loading ? 'Loading...' : 'Comment'}
                    </button>
                  ) : ''
                }
              </div>
            </form>
          </div>
        </div>
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal);
