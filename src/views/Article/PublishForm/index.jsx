import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/articles';
import close from '../../../assets/images/close.png';
import Tag from '../../../components/TagInput';

const PublishForm = ({ isOpen, closeModal, articleBody }) => {
  const hasbody = articleBody && articleBody.length;
  const submitBtn = (
    <>
      <button type="button" className="btn-purple w-32">Publish</button>
      <span>
        &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;
      </span>
      <button type="button" className="opacity-50 font-thin">
        Save as draft
      </button>
    </>
  );

  const submitTags = hasbody ? submitBtn : (<p className="text-red-600">Message Body cannot be blank</p>);

  return (
    isOpen && (
      <div className="publish">
        <button onClick={closeModal} className="closebtn"><img src={close} alt="close" /></button>
        <h4 className="mb-12">Write a little description for your viewers</h4>
        <form className="form">
          <input
            className="description"
            placeholder="Description"
            name="description"
            type="text"
          />
          <div className="flex justify-between w-full mt-24">
            <span className="category-div">
              <label className="category-div">Category</label>
              <select>
                <option value="tech">Programming</option>
                <option value="culture">Nigeria</option>
              </select>
            </span>
            <span className="tag-div">
              <label>Tags</label>
              <Tag emitTags={() => { }} />
            </span>
          </div>
          <div className="submitForm mt-12">
            {submitTags}
          </div>
        </form>
      </div>
    )
  );
};


function mapStateToProps(state) {
  return {
    isOpen: state.articles.openPublishModal,
    articleBody: state.articles.articleBody.blocks
  };
}

const matchDispatchToProps = {
  closeModal: actions.closePublishModal
};
export const PublishFormComp = PublishForm;
export default connect(mapStateToProps, matchDispatchToProps)(PublishForm);
