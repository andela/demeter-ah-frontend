import React, { Fragment } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

const Article = () => {
  const editor = new EditorJS({
    holderId: 'codex-editor',
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['link'],
        config: {
          placeholder: 'Header'
        },
        shortcut: 'CMD+SHIFT+H'
      },
    },
    data: {}
  });
  console.log('---->>>>', editor);
  return (
    <Fragment>
      <div id="codex-editor" />
    </Fragment>
  );
};

export default Article;
