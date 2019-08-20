import React, {
  Fragment, useState, useEffect
} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import callToast from '../../components/Toast';
import './index.scss';
import * as actions from '../../store/actions/articles';
import PublishForm from './PublishForm';
import FeaturedImage from './FeaturedImage';
import Editor from './Editor';

const Article = ({
  isOpen, closeModal, response, cleanUpResponse,
  createArticle, isPublishing, isDrafting, history, getCategories
}) => {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    cleanUpResponse();
    getCategories().then((res) => {
      setCategory(res);
    });
  }, [response]);

  const [formData, setformData] = useState({
    body: {}, title: ''
  });

  if (response.message && (!isPublishing || !isDrafting)) {
    callToast(response.message, 'success');
    closeModal();
    history.push(`/articles/${response.slug}`);
  } else if (response.error && (!isPublishing || !isDrafting)) {
    const { error } = response;
    if (error) {
      if (Array.isArray(error)) {
        for (let i = 0; i < error.length; i += 1) {
          callToast(error[i].message, 'error');
        }
      } else {
        callToast(error, 'error');
      }
    }
  }

  const submitForm = (publishData) => {
    const { description, categoryId } = formData;
    const { tags } = publishData;
    if (!description) {
      callToast('Description cannot be empty', 'error');
      return;
    }
    if (!tags) {
      callToast('Tags cannot be empty', 'error');
      return;
    }
    if (!categoryId) {
      callToast('Select a Category', 'error');
      return;
    }
    createArticle({ ...formData, ...publishData });
  };

  const getArticleBody = (data) => {
    setformData({ ...formData, ...data });
  };

  const getArticleTitle = (title) => {
    setformData(prevState => ({ ...prevState, title }));
  };

  const getArticleBanner = (banner) => {
    setformData(prevState => ({ ...prevState, image: banner }));
  };

  const otherFormData = (key, value) => {
    if (key !== 'tags') {
      setformData(prevState => ({ ...prevState, [key]: value }));
    }
  };

  return (
    <Fragment>
      <div className="editor w-3/4 mx-auto mt-12">
        <FeaturedImage
          isOpen={isOpen}
          articleBanner={getArticleBanner}
          articleTitle={getArticleTitle}
        />

        <Editor
          isOpen={isOpen}
          articleBody={getArticleBody}
        />
      </div>

      <PublishForm
        isOpen={isOpen}
        isPublishing={isPublishing}
        isDrafting={isDrafting}
        closeModal={closeModal}
        articleBody={formData.body.blocks}
        sendFormData={submitForm}
        articleTitle={formData.title}
        otherFormData={otherFormData}
        categories={category}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isOpen: state.articles.openPublishModal,
  isPublishing: state.articles.isPublishing,
  isDrafting: state.articles.isDrafting,
  response: state.articles.response,
});

const matchDispatchToProps = {
  closeModal: actions.closePublishModal,
  createArticle: actions.createArticle,
  cleanUpResponse: actions.cleanUpArticle,
  getCategories: actions.getCategories
};

export const ArticleComp = Article;
export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Article));
