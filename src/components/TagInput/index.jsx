import React, { useState } from 'react';
import './index.scss';

let removeTag;

const Tag = ({ tag, index }) => (
  <div className="tag-con">
    <p>{tag}</p>
    <button type="button" className="tag-remove" onClick={() => removeTag(index)}>x</button>
  </div>
);

const TagInput = ({ emitTags }) => {
  const [tags, setTags] = useState([]);

  const makeTag = (e) => {
    const tagName = e.target.value;

    const hasTag = tags.includes(tagName.toLowerCase());

    if (e.keyCode !== 13 || tagName === '' || tags.length === 5 || hasTag) return;

    e.target.value = '';
    setTags([...tags, tagName]);
    emitTags(tags);
  };

  removeTag = (index) => {
    console.log(tags, index);
    const arr = [...tags];
    arr.splice(index, 1);
    setTags(arr);
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

export default TagInput;
