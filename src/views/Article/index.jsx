import React, { Fragment, useState, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import CheckList from '@editorjs/checklist';
import TextArea from 'react-textarea-autosize';
import Button from '../../components/Button';
import callToast from '../../components/Toast';
import uploadBtn from '../../assets/images/upload-img.png';
import defaultImage from '../../assets/images/default-img.png';
import './index.scss';

const Article = () => {
  const inputEl = useRef(null);
  const [image, setImage] = useState(defaultImage);
  const [imageName, setImageName] = useState('');
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    e.persist();
    setTitle(e.target.value);
  };

  const selectArticleImage = (e) => {
    const { files } = e.target;
    let selectedImage;

    if (files && files) {
      [selectedImage] = files;
      if (!selectedImage.type.match(/image/)) {
        callToast('Please select only an image.', 'error');
        return;
      }

      setImageName(e.target.value.split(/(\\|\/)/g).pop());
      const reader = new FileReader();
      reader.onload = ev => setImage(ev.target.result);
      reader.readAsDataURL(selectedImage);
    }
  };

  const editor = new EditorJS({
    holderId: 'codex-editor',
    placeholder: 'Write your ideas',
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['link', 'bold', 'italic'],
        config: {
          placeholder: 'Header'
        },
        shortcut: 'CMD+SHIFT+H'
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      checkList: {
        class: CheckList,
        inlineToolbar: true
      }
    },
    data: {}
  });

  const save = () => {
    console.log('===', editor.holderId);
  };

  return (
    <Fragment>
      <div className=" editor w-3/4 mx-auto mt-12">
        <div className="flex bg-gray-200 relative mb-8">
          <Button
            type="button"
            onClick={() => inputEl.current.click()
            }
            name="upload"
            className="uploadbtn absolute"
          >
            <img src={uploadBtn} alt="upload button" />
          </Button>
          <div style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 99.98%, rgba(255, 255, 255, 0) 99.99%, rgba(255, 255, 255, 0.2) 100%), url(${image})` }} className="articleImg w-full object-cover mx-0 relative" alt={imageName} >
            <textarea type="text" onChange={onChange} value={title} name="title" maxLength="100" className="absolute article-title bg-transparent font-light resize-none text-white text-4xl text-center w-10/12" placeholder="Title" />
          </div>
          <input
            type="file"
            className="hidden"
            ref={inputEl}
            onChange={
              selectArticleImage
            }
          />
        </div>
        <div id="codex-editor" className="codex-editor" />
        <Button
          name="save"
          type="button"
          classes="w-64 flex items-center justify-around shadow-md rounded-lg mx-2 my-3 text-sm"
          onClick={save}
        />
      </div>
    </Fragment>
  );
};

export default Article;
