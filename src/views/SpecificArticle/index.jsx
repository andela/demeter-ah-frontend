import './index.scss';
import React, {
  useEffect, useState, useRef, Fragment
} from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { voteArticle, viewArticleAction, cleanUpArticle } from '../../store/actions/viewArticle';
import RelatedArticles from '../../components/RelatedArticles/index';
import ArticleFeaturedImg from '../../components/ArticleFeaturedImg/index';
import AuthorProfile from '../../components/AuthorProfile/index';
import ShareAndDate from '../../components/ShareAndDate/index';
import Reactions from '../../components/Reactions';
import FlagArticle from '../../components/FlagArticle/index';
import ArticleTags from '../../components/ArticleTags/index';
import convertFromJSON from '../../utils/convertFromJSON';
import { featuredImgStyle, relatedArticleImg } from '../../utils';
import { bookmarkArticle } from '../../store/actions/bookmarkArticle';
import Comment from '../../components/Comment';
import { submitReportAction, hasReadActicle } from '../../store/actions/reportArticle';
import ReportModal from '../../components/ReportModal';
import Skeleton from '../../components/ArticleLoader';
import RateArticle from '../../components/rateArticle';
import ContextMenu from '../../components/ContextMenu';
import CommentModal from '../../components/CommentModal';
import CommentIcon from '../../assets/svgs/commentIcon';


const SpecificArticle = (props) => {
  const getBody = (raw) => {
    if (!raw) {
      return;
    }
    const articleBody = convertFromJSON(raw);
    return articleBody;
  };
  let [parsedData] = useState(null);
  let parsedBody;
  const {
    article,
    article: {
      title, body, image, readTime, createdAt, category, author, tags, bookmarks
    },
    user,
    voteArticle: voteArticleAction,
    articles,
    match,
    history,
    articleError,
    isAuthenticated,
    bookmarkArticleAction,
    submitReport,
    relatedIsLoading
  } = props;

  const setTags = tags && tags.length >= 1 ? (
    tags.map(tag => (
      <div className="m-2" key={tag.ArticleTag.tagId}>
        <p className="sm:text-xs md:text-sm rounded-full sm:px-2 md:py-1 md:px-4 cursor-pointer border-2 border-solid border-purple-200 text-purple-200 bg-white whitespace-no-wrap">{tag.name}</p>
      </div>
    ))
  ) : (<p className="text-xs" />);

  const authUsername = user.username;
  const articleAuthorUsername = author && author.username;

  const [bodyValue, setbodyValue] = useState(null);
  const [onbookmark, setOnBookmark] = useState(false);
  const reportBody = useRef();

  const [showReport, setShowReport] = useState(false);
  const openReportModal = () => {
    setShowReport(!showReport);
  };

  const [highlightedText, setHighlightedText] = useState(null);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const showCommentModal = () => {
    setCommentModalVisible(!commentModalVisible);
  };

  const bookmarkthisArticle = async (e) => {
    const articleSlug = e.target.dataset.slug;
    await bookmarkArticleAction(articleSlug);
    setOnBookmark(true);
  };
  const commentNode = useRef();

  const gotoComment = () => {
    const app = document.querySelector('#app');
    app.scrollTo({
      top: commentNode.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();
    const message = reportBody.current.value;
    const payload = {
      message,
      articleId: article.id
    };
    await submitReport(payload);
    setShowReport(!showReport);
  };

  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString();
    setHighlightedText(selectedText);
  };

  const LoadMenu = (
    <div className="bg-purple-650 rounded-md p-1 cursor-pointer" onClick={showCommentModal}>
      <CommentIcon />
    </div>
  );

  const report = (
    <ReportModal
      closeModal={openReportModal}
      handleSubmit={handleReportSubmit}
      reportBody={reportBody}
    />
  );

  useEffect(() => {
    if (articleError) {
      history.push('/');
    }
  }, [articleError]);

  const getTimetoknowWhenArticleIsRead = (articleReadTime) => {
    let setTimeToMarkAsRead;
    if (articleReadTime === 'Less than a minute') {
      setTimeToMarkAsRead = 10000;
    } else {
      const timeArray = articleReadTime.split(' ');
      const timeInSeconds = timeArray[0] * 60;
      const oneMillisecond = 1000;
      const timeInMillisecond = timeInSeconds * oneMillisecond;
      const halfTheTime = timeInMillisecond / 2;
      setTimeToMarkAsRead = halfTheTime;
    }
    return setTimeToMarkAsRead;
  };

  useEffect(() => {
    let saveReadTime = setTimeout(() => { }, 0);
    let setTimeToMarkAsRead;

    if (readTime) {
      setTimeToMarkAsRead = getTimetoknowWhenArticleIsRead(readTime);
      saveReadTime = setTimeout(() => {
        props.clientReadArticle(article.slug);
      }, setTimeToMarkAsRead);
    }

    return () => {
      clearTimeout(saveReadTime);
    };
  }, [readTime]);

  useEffect(() => {
    props.cleanUpArticle();
    props.viewArticleAction(match.params.slug);
  }, [match.params.slug]);

  useEffect(() => {
    if (onbookmark) {
      props.viewArticleAction(match.params.slug);
      setOnBookmark(false);
    }

    parsedData = body && JSON.parse(body);
    parsedBody = getBody(parsedData);
    setbodyValue(parsedBody && ReactHtmlParser(parsedBody));
  }, [article, onbookmark]);

  const detail = (
    <div className="viewedArticle w-full text-center">
      <div className="article sm:w-11/12 md:w-9/12 max-w-page mx-auto relative">
        <ArticleFeaturedImg
          featuredImgStyle={featuredImgStyle}
          image={image}
          title={title}
        />
        <div className="md:flex sm:flex-row section-two sm:px-0 sm:py-2">
          <AuthorProfile
            author={author}
            readTime={readTime}
          />
          <ShareAndDate
            createdAt={createdAt}
            category={category}
            content={title}
            url={window.location.href}
            description={title}
            title={title}
            rating={article.rating}
          />
        </div>
        <div className="hr-line mt-2 mb-8" />
        <div className="flex section-three mb-8">
          <ContextMenu LoadMenu={isAuthenticated ? LoadMenu : ''}>
            <div className="text-gray-900 text-justify" onMouseUp={handleTextSelection}>
              {bodyValue}
            </div>
          </ContextMenu>
        </div>
        <RateArticle
          classes="flex cursor-pointer justify-center py-3"
          text="Your rating:"
          match={match}
          slug={match.params.slug}
        />
        <div className="sm:flex-row md:flex section-four tags mb-8">

          <ArticleTags setTags={setTags} />
          {isAuthenticated && ((author && author.username) !== user.username)
            ? (
              <FlagArticle
                handleSubmit={handleReportSubmit}
                reportBody={reportBody}
                openReportModal={openReportModal}
              />
            ) : ''}
        </div>

        <Reactions
          isAuthenticated={isAuthenticated}
          articleAuthorUsername={articleAuthorUsername}
          authUsername={authUsername}
          isBookmarked={bookmarks && bookmarks.length}
          bookmarkArticle={bookmarkthisArticle}
          commentNo={article.commentNo}
          viewComment={gotoComment}
          voteAction={voteArticleAction}
          user={user}
          article={article}
        />
        <div className="flex flex-col section-five mb-8 bg-gray-100 justify-center">
          <h2 className="w-8/12 mx-auto text-center">Related Articles</h2>
          <div className="flex flex-row w-11/12 flex-wrap justify-center pb-4 md:w-10/12 mx-auto sm:max-w-32 md:max-w-84 lg:max-w-96">
            <RelatedArticles
              articles={articles}
              relatedArticleImg={relatedArticleImg}
              isLoading={relatedIsLoading}
            />
          </div>
        </div>
        <div ref={commentNode} className="commentWrapper">
          <Comment
            commentNo={article.commentNo}
            authorUsername={articleAuthorUsername}
            match={match}
            gotoComment={gotoComment}
            slug={match.params.slug}
          />
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      {body ? detail : <Skeleton hideNav />}
      {showReport ? report : ''}
      {commentModalVisible
        ? (
          <CommentModal
            closeModal={showCommentModal}
            highlightedText={highlightedText}
            slug={match.params.slug}
          />
        ) : ''}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  article: state.viewArticle.article,
  articleError: state.viewArticle.error,
  articleIsLoading: state.viewArticle.isLoading,
  articleIsCompleted: state.viewArticle.isCompleted,
  articles: state.relatedArticles.articles,
  relatedError: state.relatedArticles.error,
  relatedIsLoading: state.relatedArticles.isLoading,
  relatedIsCompleted: state.relatedArticles.isCompleted,
});

const mapDispatchToProps = {
  voteArticle,
  viewArticleAction,
  cleanUpArticle,
  bookmarkArticleAction: slug => bookmarkArticle(slug),
  submitReport: body => submitReportAction(body),
  clientReadArticle: slug => hasReadActicle(slug)
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecificArticle);
