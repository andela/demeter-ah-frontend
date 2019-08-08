import React, { Fragment, useState } from 'react';
import './index.scss';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import PublishForm from './PublishForm';

const Article = () => {
  const [article, setArticle] = useState({});

  const editor = new EditorJS({
    holderId: 'codex-editor',
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['link'],
        config: {
          placeholder: 'Title'
        },
        shortcut: 'CMD+SHIFT+H'
      },
    },
    data: {}
  });

  console.log('---->>>>', editor);

  return (
    <Fragment>
      <div id="codex-editor"></div>
      <PublishForm article={article} />
    </Fragment>
  );
};

export default Article;
