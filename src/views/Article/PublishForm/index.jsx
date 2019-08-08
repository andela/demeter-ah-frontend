import React from 'react';
import close from '../../../assets/images/close.png';
import Tag from '../../../components/TagInput';

const submitBtn = (submit, isDrafting, isPublishing) => (
  <>
    <button disabled={isPublishing} onClick={() => submit({ publish: true })} type="button" className="btn-purple w-32">{isPublishing ? 'Publishing' : 'Publish'}</button>
    <span>
      &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;
    </span>
    <button disabled={isDrafting} onClick={() => submit({ publish: false })} type="button" className="opacity-50 font-thin">
      {isDrafting ? 'Saving' : 'Save to Draft'}
    </button>
  </>
);

const PublishForm = ({
  isOpen, sendFormData, closeModal,
  articleBody, isDrafting, isPublishing
}) => {
  const hasbody = articleBody && articleBody.length;

  const formData = {};
  const onChange = (key, value) => { formData[key] = value; };

  const getFormData = (publish) => {
    sendFormData({ ...formData, ...publish });
  };

  const submitTags = hasbody ? submitBtn(getFormData, isDrafting, isPublishing) : (<p className="text-red-600">Message Body cannot be blank</p>);

  return (
    isOpen && (
      <div className="publish">
        <button onClick={closeModal} className="closebtn"><img src={close} alt="close" /></button>
        <h4 className="mb-12 opacity-50">Write a little description for your viewers</h4>
        <form className="form">
          <input
            className="description"
            placeholder="Description"
            name="description"
            type="text"
            onChange={
              e => onChange('description', e.target.value)
            }
          />
          <div className="flex justify-between w-full mt-24">
            <span className="category-div">
              <label className="category-div">Category</label>
              <select
                onChange={
                  e => onChange('category', e.target.value)
                }
              >
                <option value="tech">Programming</option>
                <option value="culture">Nigeria</option>
              </select>
            </span>
            <span className="tag-div">
              <label>Tags</label>
              <Tag
                emitTags={
                  tags => onChange('tags', tags)
                }
              />
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

export default PublishForm;
