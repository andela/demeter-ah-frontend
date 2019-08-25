import './index.scss';
import React, {
  useEffect, useState, useRef, Fragment,
} from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { voteArticle, viewArticleAction, cleanUpArticle } from '../../store/actions/viewArticle';
import RelatedArticles from '../../components/RelatedArticles/index';
import ArticleFeaturedImg from '../../components/ArticleFeaturedImg/index';
import AuthorProfile from '../../components/AuthorProfile/index';
import ShareAndDate from '../../components/ShareAndDate/index';
import Reactions from '../../components/Reactions/index';
import FlagArticle from '../../components/FlagArticle/index';
import ArticleTags from '../../components/ArticleTags/index';
import convertFromJSON from '../../utils/convertFromJSON';
import { featuredImgStyle, relatedArticleImg } from '../../utils';
import { bookmarkArticle } from '../../store/actions/bookmarkArticle';
import Comment from '../../components/Comment';

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
    bookmarkArticleAction
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

  const bookmarkthisArticle = async (e) => {
    const articleSlug = e.target.dataset.slug;
    await bookmarkArticleAction(articleSlug);
    setOnBookmark(true);
  };
  const commentNode = useRef();

  const gotoComment = () => {
    window.scrollTo({
      top: commentNode.current.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (articleError) {
      history.push('/');
    }
    return () => {
      props.cleanUpArticle();
    };
  }, [articleError]);

  useEffect(() => {
    if (onbookmark) {
      props.viewArticleAction(match.params.slug);
      setOnBookmark(false);
    }
    if (match.params.slug !== article.slug) {
      props.viewArticleAction(match.params.slug);
    }

    parsedData = body && JSON.parse(body);
    parsedBody = getBody(parsedData);
    setbodyValue(parsedBody && ReactHtmlParser(parsedBody));
  }, [article, match.params.slug, onbookmark]);


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
          />
        </div>
        <div className="hr-line mt-2 mb-8" />
        <div className="flex section-three mb-8">
          <div className="text-gray-900 text-justify">
            {bodyValue}
          </div>
        </div>
        <div className="sm:flex-row md:flex section-four tags mb-8">
          <ArticleTags setTags={setTags} />
          <FlagArticle />
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
          <h2 className="w-8/12 mx-auto sm:text-center lg:text-left">Related Articles</h2>
          <div className="flex flex-row w-8/12 mx-auto sm:max-w-32 md:max-w-84 lg:max-w-96">
            <RelatedArticles
              articles={articles}
              relatedArticleImg={relatedArticleImg}
            />
          </div>
        </div>
        <div ref={commentNode} className="commentWrapper">
          <Comment commentNo={article.commentNo} match={match} slug={match.params.slug} />
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      {detail}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecificArticle);
