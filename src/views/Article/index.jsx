import React, {
  Fragment, useState, useEffect
} from 'react';
import { connect } from 'react-redux';
import callToast from '../../components/Toast';
import './index.scss';
import * as actions from '../../store/actions/articles';
import PublishForm from './PublishForm';
import FeaturedImage from './FeaturedImage';
import Editor from './Editor';

const Article = ({
  isOpen, closeModal, response, cleanUpResponse,
  createArticle, isPublishing, isDrafting
}) => {
  useEffect(() => {
    cleanUpResponse();
  }, [response]);

  const [formData, setformData] = useState({ body: {} });

  if (response.message && (!isPublishing || !isDrafting)) callToast(response.message, 'success');
  else if (response.error && (!isPublishing || !isDrafting)) callToast(response.error, 'error');


  const submitForm = (publishData) => {
    createArticle({ ...formData, ...publishData });
  };

  return (
    <Fragment>
      <div className="editor w-3/4 mx-auto mt-12">
        <FeaturedImage
          isOpen={isOpen}
          articleBanner={
            data => setformData({ ...formData, ...data })
          }
        />

        <Editor
          isOpen={isOpen}
          articleBody={
            data => setformData({ ...formData, ...data })
          }
        />
      </div>

      <PublishForm
        isOpen={isOpen}
        isPublishing={isPublishing}
        isDrafting={isDrafting}
        closeModal={closeModal}
        articleBody={formData.body.blocks}
        sendFormData={submitForm}
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
};

export const ArticleComp = Article;
export default connect(mapStateToProps, matchDispatchToProps)(Article);
