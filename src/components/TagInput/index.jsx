import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/articles';
import './index.scss';

let removeTag;

const Tag = ({ tag, index }) => (
  <div className="tag-con">
    <p>{tag}</p>
    <button type="button" className="tag-remove" onClick={() => removeTag(index)}>x</button>
  </div>
);

const TagInput = ({ emitTags, setArticleTag }) => {
  const [tags, setTags] = useState([]);

  const makeTag = (e) => {
    const tagName = e.target.value;

    const hasTag = tags.includes(tagName.toLowerCase());

    if (e.keyCode !== 13 || tagName === '' || tags.length === 5 || hasTag) return;

    e.target.value = '';
    setTags([...tags, tagName]);
    emitTags(tags);
    console.log('tasss', tags);
    setArticleTag(tags);
  };

  removeTag = (index) => {
    const arr = [...tags];
    arr.splice(index, 1);
    setTags(arr);
    console.log('tassgg', tags);
  };


  return (
    <div className="tag-input-con">
      {
        tags.map((tag, index) => <Tag key={tag} tag={tag} index={index} />)
      }
      <input maxLength={10} placeholder={tags.length > 0 ? '' : 'Type Tag and press enter'} className="tag-input" type="text" onKeyUp={makeTag} />
    </div>
  );
};

const matchDispatchToProps = {
  setArticleTag: actions.setArticleTag
};

export default connect(null, matchDispatchToProps)(TagInput);
