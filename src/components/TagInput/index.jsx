import React, { useState } from 'react';
import './index.scss';

let removeTag;

const Tag = ({ tag, index }) => (
  <div className="tag-con">
    <p>{tag}</p>
    <button type="button" className="tag-remove" onClick={() => removeTag(index)}>x</button>
  </div>
);

export default function TagInput({ emitTags }) {
  const [tags, setTags] = useState([]);

  if (tags.length > 0) emitTags(tags);

  const makeTag = (e) => {
    const tagName = e.target.value;

    const hasTag = tags.includes(tagName.toLowerCase());

    if (e.keyCode !== 13 || tagName === '' || tags.length === 7 || hasTag) return;

    e.target.value = '';
    setTags([...tags, tagName]);
  };

  removeTag = (index) => {
    const arr = [...tags];
    arr.splice(index, 1);
    setTags(arr);
  };


  return (
    <>
      <div className="tag-input-con">
        {
          tags.map((tag, index) => <Tag key={tag} tag={tag} index={index} />)
        }
        <input maxLength={10} placeholder={tags.length > 0 ? '' : 'Type Tag and press enter'} className="tag-input" type="text" onKeyUp={makeTag} />
      </div>
      <div>
        <p className="text-xs opacity-50 mt-2">
          <b>Note</b>
          :&nbsp; 7 tags at most with a maximum of 10 characters each
        </p>
      </div>
    </>
  );
};
