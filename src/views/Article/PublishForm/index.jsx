import React from 'react';
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
  articleBody, isDrafting, isPublishing, articleTitle,
  otherFormData, categories
}) => {
  const hasbody = articleBody && articleBody.length;
  const hasTitle = articleTitle;

  const categoryData = categories && categories.categories;

  const formData = {};
  const onChange = (key, value) => { formData[key] = value; };

  const onBlur = (key, value) => {
    otherFormData(key, value);
  };

  const getFormData = (publish) => {
    sendFormData({ ...formData, ...publish });
  };

  const submitTags = hasbody && hasTitle ? submitBtn(getFormData, isDrafting, isPublishing) : (<p className="text-red-600">Message Body or title cannot be blank</p>);

  return (
    isOpen && (
      <div className="publish">
        <button onClick={closeModal} className="closebtn"><img src="/close.png" alt="close" /></button>
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
            onBlur={e => onBlur('description', e.target.value)}
          />
          <div className="meta-div">
            <span className="category-div">
              <label className="category-div">Category</label>
              <select
                onChange={
                  e => onChange('categoryId', e.target.value)
                }
                onBlur={e => onBlur('categoryId', e.target.value)}
              >
                <option disabled>Select Category</option>
                {categoryData.map(e => <option value={e.id} key={e.id}>{e.name}</option>)}
              </select>
            </span>
            <span className="tag-div">
              <label>Tags</label>
              <Tag
                emitTags={
                  tags => onChange('tags', tags)
                }
                onBlur={e => onBlur('tags', e)}
              />
            </span>
          </div>
          <div className="submitForm my-12">
            {submitTags}
          </div>
        </form>
      </div>
    )
  );
};

export default PublishForm;
